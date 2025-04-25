
window.addEventListener("DOMContentLoaded", () => {
    const peopleTabsSections = document.querySelectorAll('[data-people-tabs]');
    peopleTabsSections.forEach(peopleTabsSection => {
        const postsContainer = peopleTabsSection.querySelector('[data-posts-container]');
        const btnShowMore = peopleTabsSection.querySelector('[data-action="show-more-btn"]');
        const tabButtons = peopleTabsSection.querySelectorAll('[data-category-id]');
        const loader = Loader.create();
        const state = new Store({ category: peopleTabsSection.getAttribute('data-initial-category'), page: 1 });

        state.onUpdate(async (prevState, state) => {
            loader.addTo(peopleTabsSection);

            setActiveTabButtons(tabButtons, state.category);

            const res = await Fetch(`/people?category=${state.category}&page=${state.page}&posts_per_page=12`);
            console.log(res);

            if (res?.posts) {
                renderLoadedCards(res.posts, postsContainer, prevState.category == state.category);
                btnShowMore && btnShowMore.classList.toggle('!hidden', res.max_num_pages == state.page);
            }

            loader.remove();
        });

        btnShowMore && btnShowMore.addEventListener('click', () => {
            state.setState({ page: state.getState().page + 1 });
        });

        tabButtons.forEach(tabBtn => {
            tabBtn.addEventListener('click', () => {
                state.setState({ category: tabBtn.getAttribute('data-category-id'), page: 1 });
            })
        });

        function renderLoadedCards(posts, container, append = false) {
            if (!container) return;

            if (!append) {
                container.innerHTML = '';
            }

            if (posts && posts.length) {
                posts.forEach(post => {
                    container.insertAdjacentHTML('beforeend', renderPopleCardAsString(post));
                });
            }
        }

        function setActiveTabButtons(buttons, currentCategory) {
            if (!buttons && !buttons.length) return;

            buttons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-category-id') == currentCategory));
        }

        if (peopleTabsSection.classList.contains('[&_.show-more-btn]:!hidden')) {
            const buttonsGroup = peopleTabsSection.querySelector('.button-group');
            buttonsGroup.classList.add('!hidden');
        }
    });
});