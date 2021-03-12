

var slideIndex = 0;
showSlides();

function plusSlide(n) {
  showSlides(slideIndex += n);
  // clearTimeout(indexTimeout)

}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);

}


function showSlides() {
  // let indexTimeout = setTimeout(plusSlide, 2000)
  let i;
  const slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  slides[slideIndex-1].style.display = "block";
  indexTimeout = setTimeout(plusSlide, 2000);
}
