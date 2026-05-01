function initScrollBar() {
    const scrollBar = document.getElementById('scrollBar');
    if (!scrollBar) return;

    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        scrollBar.style.width = scrolled + '%';
    });
}