import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  freeMode: false,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
btn.addEventListener("click", toggleMenue);
function toggleMenue() {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
}
