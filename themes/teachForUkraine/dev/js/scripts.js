function replaceImageToInlineSvg() {
    const images = document.querySelectorAll('.img-svg');

    if (images.length) {
        images.forEach(img => {
            img?.classList.remove('img-svg');
            let xhr = new XMLHttpRequest();
            const src = img.getAttribute('data-src') || img.src;
            xhr.open('GET', src);
            xhr.onload = () => {
                if (xhr.readyState === xhr.DONE) {
                    if (xhr.status === 200) {
                        let svg = xhr.responseXML.documentElement;
                        svg?.classList.add('_svg', ...Array.from(img.classList));
                        img.parentNode.replaceChild(svg, img);
                    }
                }
            }
            xhr.send(null);
        })
    }
}

function initSmoothScrollByAnchors() {
    let anchors = document.querySelectorAll('a[href^="#"]:not([data-action="open-popup"]):not([data-action="page-reload"]):not([data-action="open-vacancy-popup"])');
    if (anchors.length) {
        let header = document.querySelector('[data-header]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href')
                const id = href.length > 1 ? href : null;
                if (!id) return;
                let el = document.querySelector(href);

                if (el) {
                    e.preventDefault();
                    let top = Math.abs(document.body.getBoundingClientRect().top) + el.getBoundingClientRect().top;

                    if (header) {
                        top = top - 20;
                    }

                    window.scrollTo({
                        top: top,
                        behavior: 'smooth',
                    })
                }
            })

        })
    }
}

function initTabs() {
    const tabsContainers = document.querySelectorAll('[data-tabs]');
    if (tabsContainers.length) {
        const header = document.querySelector('[data-header]');

        tabsContainers.forEach(tabsContainer => {
            if (tabsContainer.classList.contains('_initialized')) return;

            let triggerItems = Array.from(tabsContainer.querySelectorAll('[data-tab-trigger]'));
            let contentItems = Array.from(tabsContainer.querySelectorAll('[data-tab-content]'));
            if (!(tabsContainer.getAttribute('data-tabs') === 'nested')) {
                triggerItems = triggerItems.filter(item => !item.closest('[data-tabs="nested"]'));
                contentItems = contentItems.filter(item => !item.closest('[data-tabs="nested"]'));
            }

            if (tabsContainer.dataset.hasOwnProperty('tabsId')) {
                const id = tabsContainer.getAttribute('data-tabs-id');
                contentItems.push(...document.querySelectorAll(`[data-related-tab="${id}"]`));
            }

            const getContentItems = (id) => {
                if (!id.trim()) return;
                return contentItems.filter(item => item.dataset.tabContent === id);
            }

            if (triggerItems.length && contentItems.length) {
                // init
                let activeItem = tabsContainer.querySelector('.tab-active[data-tab-trigger]');
                if (activeItem) {
                    activeItem?.classList.add('tab-active');
                    const contentItems = getContentItems(activeItem.dataset.tabTrigger);
                    contentItems.forEach(i => i.classList.add('tab-active'));
                } else {
                    if (!(tabsContainer.getAttribute('data-tabs') === 'no-start-active')) {
                        triggerItems[0]?.classList.add('tab-active');
                        const contentItems = getContentItems(triggerItems[0].dataset.tabTrigger);
                        contentItems.forEach(i => i.classList.add('tab-active'));
                    }
                }

                triggerItems.forEach(item => {
                    item.addEventListener('click', (e) => {
                        e.preventDefault();
                        item?.classList.add('tab-active');
                        const contentItems = getContentItems(item.dataset.tabTrigger);
                        contentItems.forEach(i => i.classList.add('tab-active'));

                        triggerItems.forEach(i => {
                            if (i === item) return;

                            i?.classList.remove('tab-active');
                            const contentItems = getContentItems(i.dataset.tabTrigger);
                            contentItems.forEach(i => i.classList.remove('tab-active'));
                        })

                        const action = tabsContainer.getAttribute('data-tabs-action');
                        if (action) {
                            if (action === 'scroll-to-content') {
                                const content = contentItems[0];


                                let top = Math.abs(document.body.getBoundingClientRect().top) + content.getBoundingClientRect().top;

                                if (header) {
                                    top = top - header.clientHeight;
                                }

                                window.scrollTo({
                                    top: top - 10,
                                    behavior: 'smooth',
                                })
                            }
                        }
                    })
                })
            }

            tabsContainer.classList.add('_initialized');
        })
    }
}

function initAccordions() {
    const accordions = document.querySelectorAll('[data-accordion]');
    function scrollToEl(el) {
        let header = document.querySelector('[data-header]');
        if (el) {
            let elTop = Math.abs(document.body.getBoundingClientRect().top) + el.getBoundingClientRect().top;
            let headerHeight = header ? header.clientHeight : 0;
            let viewportHeight = window.innerHeight;

            let top = elTop - (viewportHeight * 0.05) - headerHeight;

            setTimeout(() => {
                window.scrollTo({
                    top: top,
                    behavior: 'smooth',
                });
            }, 0);
        }
    }

    if (accordions.length) {
        accordions.forEach(accordion => {

            let isOneActiveItem = accordion.dataset.accordion.trim() === 'one' ? true : false;
            let triggers = accordion.querySelectorAll('[data-accordion-trigger]');

            if (triggers.length) {
                triggers.forEach(trigger => {
                    let parent = trigger.parentElement;
                    let content = trigger.nextElementSibling;

                    // init
                    if (trigger.classList.contains('active')) {
                        content.style.display = 'block';
                        parent.classList.add('active');
                    }

                    trigger.addEventListener('click', (e) => {
                        e.preventDefault();

                        parent.classList.toggle('active');
                        trigger.classList.toggle('active');
                        content && slideToggle(content, 300);

                        if (trigger.classList.contains('active')) {
                            setTimeout(async () => {
                                const isCardVisible = await checkElementVisibility(parent);
                                if (!isCardVisible) {
                                    scrollToEl(parent);
                                }
                            }, 300);
                        }

                        if (isOneActiveItem) {
                            triggers.forEach(i => {
                                if (i === trigger) return;

                                let parent = i.parentElement;
                                let content = i.nextElementSibling;

                                parent.classList.remove('active');
                                i.classList.remove('active');
                                content && slideUp(content, 300);
                            })
                        }
                    })
                })
            }
        })
    }

}

function createScrollContainer(htmlEl) {
    const wrapper = document.createElement('div');
    const slide = document.createElement('div');
    const scrollbar = document.createElement('div');

    wrapper.className = 'swiper-wrapper';
    slide.className = 'swiper-slide';
    scrollbar.className = 'swiper-scrollbar';

    htmlEl?.classList.add('swiper');

    slide.append(...htmlEl.children);
    wrapper.append(slide);
    htmlEl.append(wrapper, scrollbar);

    const swiper = new Swiper(htmlEl, {
        observe: true,
        observeParents: true,
        observeSlideChildren: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        scrollbar: {
            el: scrollbar,
        },
        mousewheel: {
            releaseOnEdges: htmlEl.getAttribute('data-scroll-container-behavior') === 'release',
        },

    });

    htmlEl.swiper = swiper;

    return swiper;
}

function initScrollContainers() {
    const containers = document.querySelectorAll('[data-scroll-container]');
    containers.forEach(container => {
        if (container.classList.contains('_initialized')) return;

        const mode = container.getAttribute('data-scroll-container');
        if (window.innerWidth < 1024 && mode === 'desk') return;
        if (container.classList.contains('_initialized')) return;
        createScrollContainer(container);
        container.classList.add('_initialized');

        const observer = new MutationObserver(_ => {
            observer.disconnect();

            container.swiper && container.swiper.update();

            observer.observe(container, {
                childList: true,
                subtree: true,
            });
        });

        observer.observe(container, {
            childList: true,
            subtree: true,
        });

        container.classList.add('_initialized');
    });
}

function initResponsiveReload(breakpoint) {
    let previousWidth = window.innerWidth;

    window.addEventListener('resize', () => {
        const currentWidth = window.innerWidth;

        if ((previousWidth < breakpoint && currentWidth >= breakpoint) || (previousWidth >= breakpoint && currentWidth < breakpoint)) {
            location.reload();
        }

        previousWidth = currentWidth;
    });
}


function initInputMask() {
    const elements = document.querySelectorAll('[data-mask]');
    elements.forEach(item => {
        if (item.classList.contains('_initialized')) return;

        let maskValue = item.getAttribute('data-mask');
        const input = item.tagName === 'INPUT' ? item : item.querySelector('input[type="text"]');

        if (!input) return;

        Inputmask(maskValue, {
            showMaskOnHover: false,
            showMaskOnFocus: true,
            oncomplete: () => {
                const event = new Event('phonecomplete', { bubbles: true });
                item.dispatchEvent(event);
            },
            oncleared: () => {
                const event = new Event('phonecleare', { bubbles: true });
                item.dispatchEvent(event);
            }
        }).mask(input);

        item.classList.add('_initialized');
    });
}

function initFancybox() {
    Fancybox.bind("[data-fancybox]", {});

    document.addEventListener("click", (e) => {
        if (e.target.closest('.fancybox__content')) return;
        if (e.target.closest('.fancybox__slide')) {
            Fancybox.close();
        }
    });
}

function initSetElSizeVariables() {
    const heightFnList = [];
    const widthFnList = [];
    const heightVariables = document.querySelectorAll('[data-height-var]');
    const widthVariables = document.querySelectorAll('[data-width-var]');

    heightVariables.forEach(el => {
        const [varName, selector] = el.getAttribute('data-height-var').split(',');
        const targetElem = selector.trim() === '_self' ? el : el.closest(selector.trim());
        if (!targetElem) return;
        heightFnList.push(debounce(() => {
            targetElem.style.setProperty(varName, `${el.clientHeight}px`);
        }, 150));
    });

    widthVariables.forEach(el => {
        const [varName, selector] = el.getAttribute('data-width-var').split(',');
        const targetElem = selector.trim() === '_self' ? el : el.closest(selector.trim());
        if (!targetElem) return;
        widthFnList.push(debounce(() => {
            targetElem.style.setProperty(varName, `${el.clientWidth}px`);
        }, 150));
    });

    heightFnList.forEach(fn => fn());
    widthFnList.forEach(fn => fn());

    window.addEventListener('resize', () => {
        heightFnList.forEach(fn => fn());
        widthFnList.forEach(fn => fn());
    });
}