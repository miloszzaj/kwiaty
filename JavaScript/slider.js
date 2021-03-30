

let slideIndex = 0;
showSlides();


function showSlides() {
  // let indexTimeout = setTimeout(plusSlide, 2000)
  let i;
  const slides = document.getElementsByClassName("slides");
  // const dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 2000);
}
