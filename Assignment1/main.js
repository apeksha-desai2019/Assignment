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
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active1";
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

function currentSlide(n) {
  showSlides(slideIndex = n);
}
/* ---Navbar---*/
function menuFunction() {
  const x = document.querySelector("#topnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
} 
