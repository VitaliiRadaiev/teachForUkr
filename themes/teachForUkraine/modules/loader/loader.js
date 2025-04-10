class Loader {
    static create() {
        const loader = document.createElement('div');
        loader.className = 'loader text-accent-second absolute z-10 inset-0 flex items-center justify-center bg-white/75';
        loader.insertAdjacentHTML('beforeend', `
            <div class="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        `);

        loader.addTo = (container) => {
            if (!container) return;
            container.append(loader);
        }

        return loader;
    }
}