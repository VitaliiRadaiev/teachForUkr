@@include('../plugins/swiper/swiper-bundle.js')
@@include('../plugins/inputmask/inputmask.min.js')
@@include('../plugins/fancybox/fancybox.min.js')
@@include('../plugins/aos/aos.js')

@@include('./utils.js')
@@include('./scripts.js')

window.addEventListener("DOMContentLoaded", () => {
    AOS && AOS.init({
        duration: 600,
        once: false,
        offset: 500
    });

    document.body.classList.add('page-loaded');

    if (isMobile()) {
        document.body.classList.add('mobile');
    }

    if (iOS()) {
        document.body.classList.add('mobile-ios');
    }

    if (isSafari()) {
        document.body.classList.add('safari');
    }

    replaceImageToInlineSvg();
    initHandlerDocumentClick();
    initSmoothScrollByAnchors();
    initResponsiveReload(1024);
    initInputMask();
    initFancybox();
    initScrollContainers();
    initSetElSizeVariables();

    // sections
    @@include("../../sections/header/header.js")
    // /= sections
}); 