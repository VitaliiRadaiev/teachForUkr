{
    const header = document.querySelector('[data-header]');
    if (header) {
        if (window.scrollY > 10) {
            header.classList.add('header-scrolling');
        }

        let isScroll = window.scrollY;

        window.addEventListener('scroll', () => {
            header.classList.toggle('header-scrolling', window.scrollY > 10);
            isScroll = window.scrollY;
        });


        const options = document.querySelector('[data-options]');
        if (options) {
            const btnBlackWhite = options.querySelector('[data-action="set-black-white-mode"]');
            const sizeButtons = options.querySelectorAll('[data-action="set-text-size"]');
            const resetBtn = options.querySelector('[data-action="reset-options"]');
            const resetOptions = options.querySelector('.reset-options');

            const checkIsAnyOptionApplay = () => {
                if (localStorage.getItem('isBlackWhite') || localStorage.getItem('font-size')) {
                    resetOptions.classList.remove('hidden');
                } else {
                    resetOptions.classList.add('hidden');
                }

                if (localStorage.getItem('isBlackWhite')) {
                    btnBlackWhite.classList.add('active');
                    document.documentElement.classList.add('grayscale');
                } else {
                    btnBlackWhite.classList.remove('active');
                    document.documentElement.classList.remove('grayscale');
                }

                if (localStorage.getItem('font-size')) {
                    sizeButtons.forEach(sizeBtn => {

                        if (sizeBtn.getAttribute('data-size') == localStorage.getItem('font-size')) {
                            sizeBtn.classList.add('active');
                        } else {
                            sizeBtn.classList.remove('active');
                        }
                    });

                    if (localStorage.getItem('font-size') != 16) {
                        document.documentElement.style.setProperty('font-size', `${localStorage.getItem('font-size')}px`);
                    } else {
                        document.documentElement.style.removeProperty('font-size');
                    }
                } else {
                    sizeButtons.forEach(sizeBtn => {
                        if (sizeBtn.getAttribute('data-size') == 16) {
                            sizeBtn.classList.add('active');
                        } else {
                            sizeBtn.classList.remove('active');
                        }
                    });
                    document.documentElement.style.removeProperty('font-size')
                }
            }

            checkIsAnyOptionApplay();

            btnBlackWhite.addEventListener('click', () => {
                if (btnBlackWhite.classList.contains('active')) {
                    localStorage.removeItem('isBlackWhite');
                } else {
                    localStorage.setItem('isBlackWhite', true);
                }

                checkIsAnyOptionApplay();
            });

            sizeButtons.forEach(sizeBtn => {
                sizeBtn.addEventListener('click', () => {
                    localStorage.setItem('font-size', sizeBtn.getAttribute('data-size'));
                    checkIsAnyOptionApplay();
                });

            })

            resetBtn.addEventListener('click', () => {
                localStorage.removeItem('isBlackWhite');
                localStorage.removeItem('font-size');
                checkIsAnyOptionApplay();
            });
        }

        const dropdowns = document.querySelectorAll('[data-dropdown]');
        dropdowns.forEach(dropdown => {
            const toggleBtn = dropdown.querySelector('[data-action="dropdown-toggle"]');
            if (toggleBtn && isMobile()) {
                toggleBtn.addEventListener('click', () => {
                    dropdown.classList.toggle('active');
                });

                handleDocumentClick((e) => {
                    if (!dropdown.contains(e.target)) {
                        dropdown.classList.remove('active');
                    }
                });
            }
        })

        const headerSearch = header.querySelector('[data-ehader-search]');
        if (headerSearch) {
            const btnOpen = header.querySelector('[data-action="open-header-search"]');
            const btnClose = headerSearch.querySelector('[data-action="close-header-search"]');
            const backdrop = document.querySelector('[data-search-backdrop]');
            const input = headerSearch.querySelector('input');
            const headerNav = header.querySelector('.header-nav');

            btnOpen.addEventListener('click', () => {
                headerNav.classList.add('hide');
                headerSearch.classList.add('active');
                backdrop.classList.add('active');
                input.focus();
                toggleDisablePageScroll(true);
            });

            const close = () => {
                headerNav.classList.remove('hide');
                headerSearch.classList.remove('active');
                backdrop.classList.remove('active');
                input.blur();
                toggleDisablePageScroll(false);
            }

            btnClose.addEventListener('click', close);
            backdrop.addEventListener('click', close);
        }
    }

    const mobileMenu = document.querySelector('[data-mobile-menu]');
    if (mobileMenu) {
        const burger = document.querySelector('[data-action="open-mobile-menu"]');
        const headerOptions = document.querySelector('.header-nav-options');
        const navItemsWithChildren = mobileMenu.querySelectorAll('.nav-item.nav-item-has-children');

        navItemsWithChildren.forEach(navItem => {
            const link = navItem.querySelector('.nav-item-link');
            const list = navItem.querySelector('.nav-item-list');

            link.addEventListener('click', (e) => {
                e.preventDefault();
                if (navItem.classList.contains('active')) {
                    navItem.classList.remove('active');
                    slideUp(list);
                } else {
                    navItem.classList.add('active');
                    slideDown(list, 300, 'flex');
                }

                navItemsWithChildren.forEach(i => {
                    if (i === navItem) return;
                    const list = i.querySelector('.nav-item-list');

                    i.classList.remove('active');
                    slideUp(list);
                })
            })
        });

        burger.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                burger.classList.remove('active');
                headerOptions.classList.remove('hide');
                toggleDisablePageScroll(false);
            } else {
                mobileMenu.classList.add('active');
                burger.classList.add('active');
                headerOptions.classList.add('hide');
                toggleDisablePageScroll(true);
            }
        });
    }
}