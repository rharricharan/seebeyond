document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    
    const cards = gsap.utils.toArray('.event-card');
    const stickySection = document.querySelector('.sticky');
    
    cards.forEach((card, index) => {
        gsap.set(card, { opacity: 0, y: 30 });
        
        gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none reverse",
                markers: false,
            }
        });
    });
});