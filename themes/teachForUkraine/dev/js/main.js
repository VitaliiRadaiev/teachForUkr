@@include('../plugins/swiper/swiper-bundle.js')
@@include('../plugins/inputmask/inputmask.min.js')
@@include('../plugins/fancybox/fancybox.min.js')
@@include('../plugins/aos/aos.js')

@@include('./utils.js')
@@include('./scripts.js')

window.addEventListener("DOMContentLoaded", () => {
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

    // sections
    @@include("../../sections/header/header.js")
    // /= sections
}); 