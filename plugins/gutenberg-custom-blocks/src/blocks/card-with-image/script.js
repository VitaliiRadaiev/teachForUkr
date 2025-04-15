window.addEventListener("DOMContentLoaded", () => {
    console.log('tes');
    
    handleDocumentClick((e) => {
        if (e.target.closest('[data-action="show-details"]')) {
            const card = e.target.closest('.card-rotate');
            card && card.classList.add('active');
        }

        if (e.target.closest('[data-action="close-details"]')) {
            const card = e.target.closest('.card-rotate');
            card && card.classList.remove('active');
        }
    })
});

