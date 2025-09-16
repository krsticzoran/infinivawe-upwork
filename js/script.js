const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector("#mobile-menu");
const body = document.body;

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  mobileMenu.classList.toggle("show");
  body.classList.toggle("menu-open");
});
