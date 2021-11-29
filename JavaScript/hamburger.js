const menuIcon = document.querySelector(".nav__hamburger");
const navbar = document.querySelector(".nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("change");
  navbar.classList.toggle("moveRight");
});
