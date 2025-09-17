// hamburger menu
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector("#mobile-menu");
const body = document.body;

hamburger.addEventListener("click", function () {
  this.classList.toggle("active");
  mobileMenu.classList.toggle("show");
  body.classList.toggle("menu-open");
});

//nav active link
const currentPath = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((link) => {
  const linkPath = link.getAttribute("href");
  if (linkPath === currentPath) {
    link.classList.add("active-link");
  }
});
