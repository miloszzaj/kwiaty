const submitBtn = document.querySelector(".message__btn");

const email = document.querySelector(".email");
const statusEmail = document.querySelector(".form__input--statusE");

const clientName = document.querySelector(".name");
const statusName = document.querySelector(".form__input--statusN");

const sendContactForm = function (e) {
  e.preventDefault();
  if (
    email.value.length > 5 &&
    email.value.includes("@") &&
    email.value.includes(".")
  ) {
    statusEmail.classList.add("hidden");
  } else {
    statusEmail.classList.remove("hidden");
  }
  if (clientName.value.length >= 2) {
    statusName.classList.add("hidden");
  } else {
    statusName.classList.remove("hidden");
  }
};
submitBtn.addEventListener("click", sendContactForm);
