const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-ul","admin-identity");
const admin = document.querySelector("admin-identity");

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  admin.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-li");
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
