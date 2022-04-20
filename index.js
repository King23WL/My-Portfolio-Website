// preloader
const preload = document.getElementById("preloader");
window.addEventListener("load", () => {
  setTimeout(() => {
    preload.style.display = "none";
  }, 1050);
});

const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});
