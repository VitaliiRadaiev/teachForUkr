/******/ (() => { // webpackBootstrap
/*!********************************************!*\
  !*** ./src/sections/people-grid/script.js ***!
  \********************************************/
window.addEventListener("DOMContentLoaded", () => {
  const peopleGridSections = document.querySelectorAll('[data-people-grid]');
  peopleGridSections.forEach(peopleGridSection => {
    if (peopleGridSection.classList.contains('[&_.show-more-btn]:!hidden')) {
      const buttonsGroup = peopleGridSection.querySelector('.button-group');
      buttonsGroup.classList.add('!hidden');
    }
    if (peopleGridSection.hasAttribute('data-selected-categories')) {
      const category = peopleGridSection.getAttribute('data-selected-categories');
      const postsContainer = peopleGridSection.querySelector('[data-posts-container]');
      const btnShowMore = peopleGridSection.querySelector('[data-action="show-more-btn"]');
      const loader = Loader.create();
      const state = new Store({
        category,
        page: 1
      });
      state.onUpdate(async (prevState, state) => {
        loader.addTo(peopleGridSection);
        const res = await Fetch(`/people?category=${state.category}&page=${state.page}&posts_per_page=12`);
        if (res?.posts) {
          renderLoadedCards(res.posts, postsContainer, prevState.category == state.category);
          btnShowMore && btnShowMore.classList.toggle('!hidden', res.max_num_pages == state.page);
        }
        loader.remove();
      });
      btnShowMore && btnShowMore.addEventListener('click', () => {
        state.setState({
          page: state.getState().page + 1
        });
      });
      function renderLoadedCards(posts, container) {
        if (!container) return;
        if (posts && posts.length) {
          posts.forEach(post => {
            container.insertAdjacentHTML('beforeend', renderPopleCardAsString(post));
          });
        }
      }
    }
  });
});
/******/ })()
;
//# sourceMappingURL=script.js.map