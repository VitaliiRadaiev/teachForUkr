/******/ (() => { // webpackBootstrap
/*!***********************************************************!*\
  !*** ./src/sections/cards-with-load-pdf-slider/script.js ***!
  \***********************************************************/
window.addEventListener("DOMContentLoaded", () => {
  function chunkArray(arr, chunkSize = 4) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }
  const sliders = document.querySelectorAll('[data-slider="cards-with-load-pdf-slider"]');
  sliders.forEach(slider => {
    const wrapper = slider.querySelector('.swiper-wrapper');
    wrapper.className = 'swiper-wrapper';
    const chunks = chunkArray(Array.from(wrapper.children));
    chunks.forEach((chunk, index) => {
      const swiperSlide = document.createElement('div');
      swiperSlide.className = 'swiper-slide !flex flex-wrap gap-[10px] md:gap-[20px] xl:gap-[24px] 4xl:gap-[30px]';
      swiperSlide.classList.toggle('justify-center', index === 0);
      swiperSlide.append(...chunk);
      wrapper.append(swiperSlide);
    });
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