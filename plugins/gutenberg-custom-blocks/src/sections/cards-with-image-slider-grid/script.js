window.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll('[data-slider="cards-with-image-slider"]');
    sliders.forEach(slider => {
        let swiperInstance;

        const enableSwiper = () => {
            swiperInstance = new Swiper(slider.querySelector('.swiper'), {
                speed: 600,
                centerInsufficientSlides: true,
                slideClass: 'card-with-image-logo',
                pagination: {
                    ...createCustomSliderPagination(slider)
                },
                breakpoints: {
                    0: {
                        slidesPerView: 'auto',
                        spaceBetween: 10,
                    },
                    744: {
                        slidesPerView: 'auto',
                        spaceBetween: 20,
                    }
                }
            });
        };

        const disableSwiper = () => {
            if (swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }
        };

        const checkScreenWidth = () => {
            if (slider.getAttribute('data-slider-init') === 'mobile-only') {
                if (window.innerWidth < 1024) {
                    if (!swiperInstance) enableSwiper();
                } else {
                    disableSwiper();
                }
            } else {
                if (!swiperInstance) enableSwiper();
            }
        };

        checkScreenWidth();

        window.addEventListener('resize', checkScreenWidth);
    });
});