window.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll('[data-slider="cases-slider"]');
    sliders.forEach(slider => {
        const swiper = new Swiper(slider.querySelector('.swiper'), {
            speed: 600,
            navigation: {
                nextEl: slider.querySelector(".nav-btn.next"),
                prevEl: slider.querySelector(".nav-btn.prev"),
            },
            centerInsufficientSlides: true,
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
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }
        });
    });
});