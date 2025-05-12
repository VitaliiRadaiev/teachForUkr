/******/ (() => { // webpackBootstrap
/*!*********************************************!*\
  !*** ./src/blocks/article-slider/script.js ***!
  \*********************************************/
window.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll('[data-slider="article-slider"]');
  sliders.forEach(slider => {
    const swiper = new Swiper(slider.querySelector('.swiper'), {
      speed: 600,
      navigation: {
        nextEl: slider.querySelector(".nav-btn.next"),
        prevEl: slider.querySelector(".nav-btn.prev")
      },
      centerInsufficientSlides: true,
      pagination: {
        ...createCustomSliderPagination(slider)
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        744: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 24
        },
        1920: {
          slidesPerView: 1,
          spaceBetween: 30
        }
      }
    });
  });
});
/******/ })()
;
//# sourceMappingURL=script.js.map