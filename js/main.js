/// mobile menu toggle

const TOGGLEBTN = document.querySelector(".nav-toggle--btn");
const NAVLINKS = document.querySelector(".mainNav--links");

TOGGLEBTN.addEventListener("click",function () {
    this.classList.toggle("active");
    NAVLINKS.classList.toggle("show");
});