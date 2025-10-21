document.addEventListener('DOMContentLoaded', () => {

    // --- SMOOTH SCROLL FOR NAV LINKS ---
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            if (window.location.pathname === this.pathname && this.hash !== "") {
                e.preventDefault();
                const target = document.querySelector(this.hash);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- FADE-IN ANIMATION ON SCROLL ---
    const fadeElements = document.querySelectorAll('.skill-card, .project-card, .hero-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 
    });

    fadeElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

});