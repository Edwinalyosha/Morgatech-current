const headlines=["#hdln1", "#hdln2", "#hdln3"];

let i=0; //this is the counter for the headline texts

function nextHdln(){
    if (i<2){
       prev= document.querySelector(headlines[i]);
       prev.classList.remove("d-flexbox");
       prev.classList.add("d-none");

     
       next=document.querySelector(headlines[i+1]);
       next.classList.add("d-flexbox");
       next.classList.remove("d-none");

       i++;
    }
    else {
       prev= document.querySelector(headlines[i]);
       prev.classList.remove("d-flexbox");
       prev.classList.add("d-none");
      

       i=0;
       next=document.querySelector(headlines[i]);
       next.classList.add("d-flexbox");
       next.classList.remove("d-none");       
    }

}
setInterval(nextHdln,7000);


// 'we are hiring' card has since been removed
// card=document.getElementById("hiring");
// window.onload=()=>{
//    card.style.display="initial";
//    loadFunc();
// };

/* now for the counters for the different stat values*/
let vals=document.querySelectorAll(".num");
let interval=1500;

const statObserver=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
         if(entry.isIntersecting){
            vals.forEach((Val)=>{
               console.log(" working");
               let startVal=0;
               let endVal=parseInt(Val.getAttribute("stat-val"));
               let duration=Math.floor(interval/endVal);
               let counter=setInterval(function(){
                  startVal+=1;
                  Val.textContent=startVal;
                  if(startVal==endVal){
                     clearInterval(counter);
                  }
               }, duration);
            })
      } else{}
      })

});


let stats= document.querySelector(".offers");
//statObserver.observe(stats);

