function initReveal() {
    const isMobile = window.innerWidth < 768;
    const threshold = isMobile ? 0.08 : 0.12;

    const revealElements = document.querySelectorAll('.reveal, .reveal-left');
    const observerOptions = {
        threshold: threshold,
        rootMargin: '0px 0px -40px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));
}