function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slides");
  let dots = document.querySelectorAll(".dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-dot";
}
let slideIndex = 1;
showSlides(slideIndex);

let previous = document.querySelector(".prev");
previous.addEventListener("click", function () { plusSlides(-1) });

let nxt = document.querySelector(".next");
nxt.addEventListener("click", function () { plusSlides(1) });

function plusSlides(n) {
  showSlides(slideIndex += n);
}
let slide1 = document.querySelector("#dot-one");
slide1.addEventListener("click",function(){currentSlide(1)} );

let slide2 = document.querySelector("#dot-two");
slide2.addEventListener("click",function(){currentSlide(2)} );

let slide3 = document.querySelector("#dot-three");
slide3.addEventListener("click",function(){currentSlide(3)} );

function currentSlide(n) {
  showSlides(slideIndex = n);
}
/* ---Navbar---*/
let menubar = document.querySelector(".menu-bar");
menubar.addEventListener("click",menuFunction);
function menuFunction() {
  const x = document.querySelector(".navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
} 
