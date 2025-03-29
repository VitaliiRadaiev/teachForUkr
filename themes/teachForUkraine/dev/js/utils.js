function slideUp(target, duration = 300) {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target?.classList.remove('_slide');
    }, duration);
}
function slideDown(target, duration = 300, displayContainer = 'block') {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none')
        display = displayContainer;

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target?.classList.remove('_slide');
    }, duration);
}
function slideToggle(target, duration = 300) {
    if (!target?.classList.contains('_slide')) {
        target?.classList.add('_slide');
        if (window.getComputedStyle(target).display === 'none') {
            return this.slideDown(target, duration);
        } else {
            return this.slideUp(target, duration);
        }
    }
}
function isSafari() {
    let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    return isSafari;
}
function Android() {
    return navigator.userAgent.match(/Android/i);
}
function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
}
function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
}
function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
}
function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
}
function isMobile() {
    return (Android() || BlackBerry() || iOS() || Opera() || Windows());
}

function initHandlerDocumentClick() {
    const cbList = [];

    window.handleDocumentClick = (cb) => {
        cbList.push(cb);
    }

    document.addEventListener('click', (e) => cbList.forEach(cb => cb(e)));
}

function toggleDisablePageScroll(state) {
    const needOffsetElements = document.querySelectorAll('[data-popup="add-right-padding"]');

    if (state) {
        const offsetValue = getScrollbarWidth();
        document.documentElement?.classList.add('overflow-hidden');
        document.body?.classList.add('overflow-hidden');
        document.documentElement.style.paddingRight = offsetValue + 'px';
        needOffsetElements.forEach(el => el.style.paddingRight = offsetValue + 'px');
    } else {
        setTimeout(() => {
            document.documentElement?.classList.remove('overflow-hidden');
            document.body?.classList.remove('overflow-hidden');
            document.documentElement.style.removeProperty('padding-right');
            needOffsetElements.forEach(el => el.style.removeProperty('padding-right'));
        }, 400);
    }
}


function getScrollbarWidth() {
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth;

    return lockPaddingValue;
}

function debounce(func, wait) {
    let timeout;

    function debounced(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    }

    debounced.cancel = function () {
        clearTimeout(timeout);
    };

    return debounced;
}
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function linear(t) {
    return t;
}

function easeIn(t) {
    return t * t; 
}

function easeOut(t) {
    return t * (2 - t);
}

function easeOutQuart(t) {
    return 1 - --t * t * t * t;
}

function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
}

function createAnimator({ timing, draw, duration, onEnd }) {
    let start = null;
    let pausedAt = null;
    let rafId = null;

    const animate = time => {
        if (!start) start = time;
        if (pausedAt) {
            start += (time - pausedAt);
            pausedAt = null;
        }
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        let progress = timing(timeFraction);
        draw(progress);

        if (timeFraction < 1) {
            rafId = requestAnimationFrame(animate);
        } else {
            onEnd()
            start = null;
        }
    };

    return {
        start: () => {
            if (!rafId) {
                rafId = requestAnimationFrame(animate);
            }
        },
        pause: () => {
            if (rafId) {
                pausedAt = performance.now();
                cancelAnimationFrame(rafId);
                rafId = null;
            }
        },
        reset: () => {
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = null;
            }
            start = null;
            pausedAt = null;
        }
    };
};

function buildThresholdList(threshold) { //threshold: number
    const array = [];
    for (let i = 1; i <= threshold; i++) {
        array.push(i / threshold);
    }
    return array;
}

async function WpFetch(requestData) {
    const controller = new AbortController();
    const tId = setTimeout(() => controller.abort(), 5000);

    const queryData = new URLSearchParams();
    for (const key in requestData) {
        queryData.set(key, requestData[key])
    }

    try {
        const res = await fetch(wc_cart_params.ajax_url, {
            method: "POST",
            body: queryData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            signal: controller.signal
        });

        clearTimeout(tId);

        if (!res.ok) {
            throw new Error('Network error: ' + res.status);
        }
    
        return res.json(); 

    } catch (err) {

        if (err.name == 'AbortError') { 
            return { success: false }
        } else {
            throw err;
        }
        
    }
}

function createScrollTrigger(element) {
    return new Promise(res => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    element.classList.add('_animate');
                    observer.disconnect();
                    res();
                }
            });
        }, {
            root: null,
            rootMargin: "0px 0px -1% 0px",
            threshold: 0.01
        });
    
        observer.observe(element);
    });
}

function ifNeedToAnimate(element) {
    const scrollPosition = window.scrollY;
    const elementTopPosition = element.getBoundingClientRect().top + scrollPosition;

    if (elementTopPosition > scrollPosition + (window.innerHeight * 0.25)) {
        return true;
    } else {
        return false;
    }
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function checkElementVisibility(el) {
    return new Promise(res => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    res(true);
                } else {
                    res(false)
                }
                observer.disconnect();
            });
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 1,
        });

        observer.observe(el);
    })
}

function calcProgress(start, end, current) {
    if (current <= start) return 0;
    if (current >= end) return 1;  
    return (current - start) / (end - start); 
}

function calcValueByProgress(start, end, progress) {
    return start + (end - start) * progress;
}

function calcValueByProgressArr(values, progress) {
    progress = Math.min(1, Math.max(0, progress));

    const totalSteps = values.length - 1;
    const scaledProgress = progress * totalSteps;
    const lowerIndex = Math.floor(scaledProgress);
    const upperIndex = Math.min(lowerIndex + 1, totalSteps);

    const intervalProgress = scaledProgress - lowerIndex;

    return values[lowerIndex] + (values[upperIndex] - values[lowerIndex]) * intervalProgress;
}

function scrollToEl(target) {
    let el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return;

    let header = document.querySelector('[data-header]');
    let elTop = Math.abs(document.body.getBoundingClientRect().top) + el.getBoundingClientRect().top;
    let headerHeight = header ? header.clientHeight : 0;
    let viewportHeight = window.innerHeight;
    let top = elTop - headerHeight;

    setTimeout(() => {
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    }, 0);
}