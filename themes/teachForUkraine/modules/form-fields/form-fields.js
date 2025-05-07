    // ============

    const textareaFields = document.querySelectorAll('.textarea');
    textareaFields.forEach(textarea => {
        textarea.addEventListener('input', () => {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        });
    });

    // ============

    const loader = Loader.create();

    document.addEventListener('wpcf7beforesubmit', (e) => {
        loader.addTo(e.target);
    });

    document.addEventListener('wpcf7mailsent', (e) => {
        loader.remove();

        const formContainer = e.target.closest('[data-feedback-form]');
        if (!formContainer) return;

        window.popup.open('#popup-success');

    }, false);

    document.addEventListener('wpcf7mailfailed', (e) => {
        loader.remove();

        const formContainer = e.target.closest('[data-feedback-form]');
        if (!formContainer) return;

        window.popup.open('#popup-unsuccess');

    });


    document.addEventListener('wpcf7invalid', function (e) {
        loader.remove();
    });