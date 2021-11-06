//zmiana koloru nav bar po scrollu

const navBar = document.querySelector(".nav");
const addNavbarBgrColor = () => {
  if (window.scrollY > 80) {
    navBar.classList.add("nav__bgr");
  } else {
    navBar.classList.remove("nav__bgr");
  }
};

window.addEventListener("scroll", addNavbarBgrColor);
