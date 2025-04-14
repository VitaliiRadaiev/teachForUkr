window.addEventListener("DOMContentLoaded", () => {

    const partnersGridSections = document.querySelectorAll('[data-partners-grid]');
    partnersGridSections.forEach(partnersGridSection => {
        const postsContainer = partnersGridSection.querySelector('[data-posts-container]');
        const btnShowMore = partnersGridSection.querySelector('[data-action="show-more-parnters"]');
        const filterButtons = partnersGridSection.querySelectorAll('[data-category-slug]');
        const loader = Loader.create();
        const state = new Store({ slug: 'all', page: 1 });

        state.onUpdate(async (prevState, state) => {
            loader.addTo(partnersGridSection);

            setActiveFilterButtons(filterButtons, state.slug);

            const res = await Fetch(`/partners?category=${state.slug}&page=${state.page}`)
            if(res?.posts) {
                renderLoadedCards(res.posts, postsContainer, prevState.slug === state.slug);
                initScrollContainers();
                btnShowMore && btnShowMore.classList.toggle('!hidden', res.max_num_pages == state.page);
            }

            loader.remove();
        });

        btnShowMore && btnShowMore.addEventListener('click', () => {
            state.setState({ page: state.getState().page + 1 });
        });

        partnersGridSection.addEventListener('click', (e) => {

            if(e.target.closest('[data-action="show-details"]')) {
                const card = e.target.closest('.partner-card');
                card && card.classList.add('active');
            }

            if(e.target.closest('[data-action="close-details"]')) {
                const card = e.target.closest('.partner-card');
                card && card.classList.remove('active');
            }

            if(e.target.closest('[data-category-slug]')) {
                const filterBtn = e.target.closest('[data-category-slug]');
                const slug = filterBtn.getAttribute('data-category-slug');
                state.setState({ slug, page: 1 });
            }
        });
    });

    function renderLoadedCards(posts, container, append = false) {
        if(!container) return;

        if(!append) {
            container.innerHTML = '';
        }

        if(posts && posts.length) {
            posts.forEach(post => {
                container.insertAdjacentHTML('beforeend', `
                    <div class="partner-card card-rotate relative md-and-lg-max:[&:last-child:nth-child(odd)]:col-span-2">
                        <div class="card-rotate-front nested-bg-item p-[5px] rounded-[12px] h-full flex flex-col">
                           <div class="absolute top-[15px] left-0 right-0 pl-[15px] pr-[70px] flex flex-wrap gap-[5px]">
                                ${post.categories.length
                                    ? post.categories.map(category => {
                                        return `
                                            <div class="category-tag category-colors-${category.type}">
                                                <img src="${category.img}" alt="category-icon">
                                                <span>
                                                    ${category.name}
                                                </span>
                                            </div>
                                        `;
                                    } ).join(' ')
                                    : ''}
                           </div>
                            
                           ${post.excerpt
                            ? `
                              <button data-action="show-details" class="absolute top-[15px] right-[15px] cursor-pointer hover:scale-105 transition-transform">
                                 <img class="h-[44px] lg:h-[30px] w-[44px] lg:w-[30px] object-contain" src="${document.location.origin}/wp-content/themes/teachForUkraine/assets/images/icons/info.svg" alt="info">
                              </button>
                            `
                            : ''}

                           <div class="h-[177px] rounded-[8px] bg-[var(--bg)] pt-[44px] pb-[20px] px-[20px] flex items-center justify-center">
                              ${post.logo}
                           </div>
                           <div class="mt-[5px] p-[15px] lg:pt-[25px] lg:pb-[20px] shrink grow">
                              <div class="h3 text-dark-primary">
                                 ${post.title}
                              </div>
                              ${post.url
                                ?  `
                                <div class="mt-[20px]">
                                    <a href="${post.url}" class="btn-with-arrow accent-first">
                                       <span data-text="${post.text_go_to}"></span>
                                    </a>
                                 </div>
                                `
                                : ''}
                           </div>
                        </div>
                        <div class="card-rotate-back nested-bg-item absolute top-0 left-0 h-full w-full rounded-[12px] flex flex-col p-[20px]">
                           <button data-action="close-details" class="absolute top-[20px] right-[20px] icon-x-mark flex items-center justify-center h-[44px] w-[44px] rounded-[8px] bg-dark-primary text-light-primary text-sm transition-colors hover:bg-dark-primary-80"></button>
                           <div class="h-[55px] lg:h-[72px] shrink-0 grow-0 flex items-center">
                                ${post.logo}
                           </div>
                           <div class="h3 text-dark-primary mt-[20px]">
                                ${post.title}
                           </div>
                           <div class="mt-[10px] h-full overflow-auto">
                              <div data-scroll-container class="max-h-full [&_.swiper-scrollbar]:right-0">
                                 <div class="text-dark-primary text-md pr-[10px]">
                                    ${post.excerpt}
                                 </div>
                              </div>
                           </div>
                            ${post.url
                            ?  `
                            <div class="mt-[20px]">
                                <a href="${post.url}" class="btn-with-arrow accent-first">
                                    <span data-text="${post.text_go_to}"></span>
                                </a>
                                </div>
                            `
                            : ''}
                        </div>
                     </div>
                `);
            });
        }
    }

    function setActiveFilterButtons(buttons, currentSlug) {
        if(!buttons && !buttons.length) return;

        buttons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-category-slug') === currentSlug));
    }

});

