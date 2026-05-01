function initAnimations() {
    if (window.innerWidth < 768) return;

    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll('.watermark').forEach((watermark) => {
        gsap.to(watermark, {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: {
                trigger: watermark.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    const doodles = document.querySelectorAll('.doodle');
    doodles.forEach((doodle, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        gsap.to(doodle, {
            y: direction * 30,
            rotation: direction * 5,
            ease: 'none',
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    gsap.from('.skill-card', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%'
        }
    });

    gsap.from('.project-card', {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%'
        }
    });

    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                scrollIndicator.classList.add('hidden');
            } else {
                scrollIndicator.classList.remove('hidden');
            }
        });
    }
}