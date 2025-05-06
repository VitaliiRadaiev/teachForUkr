window.addEventListener("DOMContentLoaded", () => {
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

            accordion.addEventListener('click', (e) => {
                if (e.target.closest('[data-accordion-trigger]')) {
                    const trigger = e.target.closest('[data-accordion-trigger]');
                    let parent = trigger.parentElement;
                    let content = trigger.nextElementSibling;

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
                        Array.from(accordion.children).forEach(i => {
                            if (i === parent) return;

                            const trigger = i.querySelector('[data-accordion-trigger]');
                            const content = trigger.nextElementSibling;

                            i.classList.remove('active');
                            trigger.classList.remove('active');
                            content && slideUp(content, 300);
                        })
                    }
                }
            });
        })
    }

    const faqSections = document.querySelectorAll('[data-faq]');
    faqSections.forEach(faqSection => {
        const category = faqSection.getAttribute('data-selected-categories');
        const popular = faqSection.getAttribute('data-popular');
        const postsContainer = faqSection.querySelector('[data-posts-container]');
        const btnShowMore = faqSection.querySelector('[data-action="show-more-btn"]');
        const loader = Loader.create();
        const state = new Store({ category, popular: !!popular, page: 1 });


        state.onUpdate(async (prevState, state) => {
            loader.addTo(faqSection);

            const res = await Fetch(`/question?category=${state.category}&page=${state.page}&popular=${state.popular}&posts_per_page=5`);
            if (res?.posts) {
                renderLoadedCards(res.posts, postsContainer, prevState.category == state.category);
                btnShowMore && btnShowMore.classList.toggle('!hidden', res.max_num_pages == state.page);
            }

            loader.remove();
        });

        btnShowMore && btnShowMore.addEventListener('click', () => {
            state.setState({ page: state.getState().page + 1 });
        });

        function renderLoadedCards(posts, container) {
            if (!container) return;

            if (posts && posts.length) {
                posts.forEach(post => {
                    container.insertAdjacentHTML('beforeend', `
                        <div class="nested-bg-item rounded-[12px] border border-dark-primary-10 transition-colors [&.active]:border-accent-first hover:border-accent-first">
                            <div data-accordion-trigger class="flex items-center justify-between gap-[24px] py-[16px] md:py-[10px] 4xl:py-[16px] pl-[16px] md:pl-[30px] pr-[10px] min-h-[82px] md:min-h-[70px] cursor-pointer [&.active_.plus-icon-square]:bg-accent-first [&.active_.item-2]:bg-white [&.active_.item-1]:scale-y-0 [&:not(.active)_.plus-icon-square]:hover:bg-accent-first-10 [&_.title]:hover:text-accent-first">
                                <div class="title text-xl font-medium text-dark-primary transition-colors">
                                    ${post.title}
                                </div>
                                <div class="plus-icon-square ml-auto grow-0 shrink-0 w-[50px] h-[50px] border-[2px] border-accent-first rounded-[8px] bg-accent-first-5 relative transition-colors">
                                    <span class="item-1 absolute block bg-accent-first transition-colors top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[16px] w-[2px]"></span>
                                    <span class="item-2 absolute block bg-accent-first transition top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[2px] w-[16px]"></span>
                                </div>
                            </div>
                            <div class="hidden mt-[-4px] md:mt-0 pb-[16px] md:pb-[30px] pl-[32px] md:pl-[50px] pr-[26px] md:pr-[134px] text-dark-primary-60">
                                ${post.content}
                            </div>
                        </div>
                    `);
                });
            }
        }


        if (faqSection.classList.contains('[&_.show-more-btn]:!hidden')) {
            const buttonsGroup = faqSection.querySelector('.button-group');
            if (buttonsGroup.children.length == 1) {
                buttonsGroup.classList.add('!hidden');
            }
        }
    })
});