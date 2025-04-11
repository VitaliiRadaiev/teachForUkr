/******/ (() => { // webpackBootstrap
/*!************************************************!*\
  !*** ./src/sections/partners-slider/script.js ***!
  \************************************************/
window.addEventListener("DOMContentLoaded", () => {
  const partnersSliders = document.querySelectorAll('[data-slider="partners"]');
  partnersSliders.forEach(partnersSlider => {
    const swiper = new Swiper(partnersSlider.querySelector('.swiper'), {
      speed: 600,
      navigation: {
        nextEl: partnersSlider.querySelector(".nav-btn.next"),
        prevEl: partnersSlider.querySelector(".nav-btn.prev")
      },
      centerInsufficientSlides: true,
      pagination: {
        ...createCustomSliderPagination(partnersSlider)
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        744: {
          slidesPerView: 3,
          spaceBetween: 24
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 24
        },
        1920: {
          slidesPerView: 6,
          spaceBetween: 32
        }
      }
    });
  });
});
/******/ })()
;
//# sourceMappingURL=script.js.map