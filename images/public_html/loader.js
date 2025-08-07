
function loadFunc(){
    const loader=document.querySelector('.loader');
    const anchors=document.querySelectorAll('a.trans');

    // these variables are for the randomizer not to be confused with the rest of the code
    
    var classes=["pg-left", "pg-right", "pg-fade", "pg-up", "pg-down"];

    setTimeout(()=>{
        loader.classList.remove('is-active');
    },500);

    for(let i=0; i<anchors.length;i++){
        const anchor=anchors[i];

        anchor.addEventListener('click', e =>{
            e.preventDefault();
            let target=e.currentTarget.href;
        
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
            

            setTimeout(()=>{
                window.location.href=target;
            },1500);

        });
    }
}

window.onload= loadFunc();


// now we need to work on fixing the info bar to the top when we scroll. 
const header= document.querySelector(".infobar")
const navbar=document.querySelector("nav")

const sectionOneOptions={
// to be used in future cases where other changes are to be made. not necessary here
}

const sectionOneObserver= new IntersectionObserver(
    function(entries, sectionOneObserver)
    {
        entries.forEach(entry => {
            if (!entry.isIntersecting){
                header.classList.add("fixed-top");
            }
            else{
                header.classList.remove("fixed-top")
            }
        })
    },
    sectionOneOptions);

    sectionOneObserver.observe(navbar);

    //the 'back to top' button; necessary on each page
    // Get the button:
let mybutton = document.getElementById("b2t");

// When the user scrolls down 20px from the top of the document, show the button
document.addEventListener('DOMContentLoaded', function () {
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

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });

    fetch('infobar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('infobar').innerHTML = data;
        });
  });