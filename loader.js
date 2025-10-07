// Google Analytics 4 (GA4) - Defer loading for better performance
function loadGoogleAnalytics() {
    if (!window.gtag) {
        window.dataLayer = window.dataLayer || [];

        function gtag() { dataLayer.push(arguments); } // eslint-disable-line no-unused-vars
        window.gtag = gtag;

        const ga = document.createElement('script');
        ga.async = true;
        ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-JD2XZYN52G';
        ga.onload = function() {
            gtag('js', new Date());
            gtag('config', 'G-JD2XZYN52G');
        };
        document.head.appendChild(ga);
    }
}

function loadFunc() {
    const loader = document.querySelector('.loader');
    const anchors = document.querySelectorAll('a.trans');

    // these variables are for the randomizer not to be confused with the rest of the code

    var classes = ["pg-left", "pg-right", "pg-fade", "pg-up", "pg-down"];

    // Mobile-optimized loader timing for better LCP
    var isMobile = window.innerWidth <= 768;
    var loaderDelay = isMobile ? 50 : 100; // Faster on mobile

    setTimeout(() => {
        loader.classList.remove('is-active');
        // Load GA after critical content is visible - delayed more on mobile
        var gaDelay = isMobile ? 500 : 100;
        requestIdleCallback ?
            requestIdleCallback(loadGoogleAnalytics, { timeout: gaDelay }) :
            setTimeout(loadGoogleAnalytics, gaDelay);
    }, loaderDelay);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.currentTarget.href;

            loader.classList.add('is-active');



            // now we randomly swithch the animation style

            // var rand=Math.random();
            // var curr_class="null"; // for current class
            // for(var j=0; j<classes.length; j++){
            //     if(loader.classList.contains(classes[j]))curr_class=classes[j];
            // }

            // console.log(curr_class, rand);
            // if(rand>0.8 && curr_class!= "null") {
            //     loader.classList.remove(curr_class);
            //     loader.classList.add("pg-left");
            // }
            // else if(rand>0.6 && curr_class!= "null")loader.classList.replace(curr_class,"pg-right");
            // else if(rand>0.4 && curr_class!= "null")loader.classList.replace(curr_class,"pg-fade");
            // else if(rand>0.2 && curr_class!= "null")loader.classList.replace(curr_class,"pg-up");
            // else loader.classList.replace(curr_class,"pg-down");

            // here ends the code resonsible for switching animations


            setTimeout(() => {
                window.location.href = target;
            }, 1500);

        });
    }
}

// Optimize page load timing
document.addEventListener('DOMContentLoaded', loadFunc);


// now we need to work on fixing the info bar to the top when we scroll. 
const header = document.querySelector(".infobar")
const navbar = document.querySelector("nav")

const sectionOneOptions = {
    // to be used in future cases where other changes are to be made. not necessary here
}

// const sectionOneObserver= new IntersectionObserver(
//     function(entries, sectionOneObserver)
//     {
//         entries.forEach(entry => {
//             if (!entry.isIntersecting){
//                 header.classList.add("fixed-top");
//             }
//             else{
//                 header.classList.remove("fixed-top")
//             }
//         })
//     },
//     sectionOneOptions);

//     sectionOneObserver.observe(navbar);

//the 'back to top' button; necessary on each page
// Get the button:
let mybutton = document.getElementById("b2t");

// When the user scrolls down 20px from the top of the document, show the button
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = 'flex';
            backToTopButton.style.opacity = '1';
        } else {
            backToTopButton.style.opacity = '0';
            setTimeout(() => { backToTopButton.style.display = 'none'; }, 300);
        }
    };

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
});

// Optimize content loading to prevent CLS
document.addEventListener("DOMContentLoaded", function() {
    // Use requestIdleCallback for non-critical content
    const loadSecondaryContent = () => {
        fetch('infobar.html')
            .then(response => response.text())
            .then(data => {
                const infobar = document.getElementById('infobar');
                infobar.innerHTML = data;
                infobar.style.minHeight = 'auto'; // Remove placeholder height once loaded
            });

        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                const footer = document.getElementById('footer-placeholder');
                footer.innerHTML = data;
                footer.style.minHeight = 'auto'; // Remove placeholder height once loaded
            });
    };

    // Load secondary content when browser is idle or after a short delay
    if ('requestIdleCallback' in window && typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(loadSecondaryContent, { timeout: 1000 });
    } else {
        setTimeout(loadSecondaryContent, 100);
    }

    // Remove min-height from image container once image is loaded to prevent CLS
    const morgImg = document.querySelector('.morg-img img');
    if (morgImg) {
        morgImg.addEventListener('load', function() {
            const container = this.closest('.morg-img');
            if (container) {
                container.style.minHeight = 'auto';
            }
        });

        // If image is already loaded (cached)
        if (morgImg.complete) {
            const container = morgImg.closest('.morg-img');
            if (container) {
                container.style.minHeight = 'auto';
            }
        }
    }
});