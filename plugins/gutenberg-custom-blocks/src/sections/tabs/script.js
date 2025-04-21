window.addEventListener("DOMContentLoaded", () => {
    console.log('tes');
    
    const tabsContainers = document.querySelectorAll('[data-tabs]');
    if (tabsContainers.length) {
        tabsContainers.forEach(tabsContainer => {
            if (tabsContainer.classList.contains('_initialized')) return;

            const triggerItems = Array.from(tabsContainer.querySelectorAll('[data-tab-trigger]'));
            const contentItems = Array.from(tabsContainer.querySelectorAll('[data-tab-content]'));

            triggerItems.forEach((trigger, index) => {
                trigger.addEventListener('click', () => {
                    triggerItems.forEach((i, ind) => i.classList.toggle('active', ind === index));
                    contentItems.forEach((i, ind) => i.classList.toggle('active', ind === index));

                });
            });


            tabsContainer.classList.add('_initialized');
        })
    }
});