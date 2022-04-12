const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// preloader
const preload = document.getElementById("preloader");
window.addEventListener("load", () => {
  setTimeout(() => {
    preload.style.display = "none";
  }, 1050);
});
