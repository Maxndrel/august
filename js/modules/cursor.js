function initCursor() {
    if (window.matchMedia('(hover: none)').matches) {
        return;
    }

    const cursorDot = document.getElementById('cursor');
    const cursorRing = document.getElementById('cursorRing');

    if (!cursorDot || !cursorRing) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    function animateCursor() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card, .tool-pill, .contact-link, .circle-btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
    });

    document.addEventListener('mouseleave', () => {
        cursorDot.style.display = 'none';
        cursorRing.style.display = 'none';
    });

    document.addEventListener('mouseenter', () => {
        cursorDot.style.display = 'block';
        cursorRing.style.display = 'block';
    });
}