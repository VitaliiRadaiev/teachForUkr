@@include('../plugins/swiper/swiper-bundle.js')
@@include('../plugins/aos/aos.js')
@@include('../plugins/fancybox/fancybox.min.js')

@@include('./utils.js')
@@include('./scripts.js')
@@include("../../modules/loader/loader.js")

window.addEventListener("DOMContentLoaded", () => {
    AOS && AOS.init({
        duration: 600,
        once: true,
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

    @@include('../plugins/popup/popup.js') 

    // modules
    @@include("../../modules/form-fields/form-fields.js")
    // /= modules

    // sections
    @@include("../../sections/header/header.js")
    // /= sections
}); 