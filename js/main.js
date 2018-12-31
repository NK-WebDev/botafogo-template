// setup rellax paralax plugin

const parallax = document.querySelectorAll(".parallax");
window.addEventListener("scroll", function () { 
    let offset = window.pageYOffset;
    parallax.forEach(function (element) {  
        element.style.backgroundPositionY = (offset - element.offsetTop) * 0.4 + "px";
     });
 });



/// mobile menu toggle

const TOGGLEBTN = document.querySelector(".nav-toggle--btn");
const NAVLINKS = document.querySelector(".mainNav--links");
const MENUITEMS = document.querySelectorAll(".mainNav--links a");


for (let i = 0; i < MENUITEMS.length; i++) {
    MENUITEMS[i].style.transitionDelay = `${(i+3) * 100}ms`;
}

TOGGLEBTN.addEventListener("click",function () {
    this.classList.toggle("active");
    NAVLINKS.classList.toggle("show");
});

// smooth scrolling

let scroll = new SmoothScroll('a[href*="#"]',{
    speed: 450,
    easing: 'easeOutCubic',
    header: '#mainHeader'
});


const MAINHEADER = document.querySelector("#mainHeader");
let headerHeight = MAINHEADER.scrollHeight;

window.addEventListener("scroll",function(){
    if(this.window.scrollY > headerHeight){
        MAINHEADER.classList.add("stick");
        MAINHEADER.classList.remove("unstick");
    }
    else{
        MAINHEADER.classList.remove("stick");
        MAINHEADER.classList.add("unstick");
    }
})