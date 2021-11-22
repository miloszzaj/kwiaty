const menuIcon = document.querySelector(".nav__hamburger");
const navbar = document.querySelector(".nav");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});
