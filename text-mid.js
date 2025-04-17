gsap.registerPlugin(ScrollTrigger);

const textElements = document.querySelectorAll('.text-reveal-content');

textElements.forEach(text => {
    gsap.fromTo(text, 
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
                trigger: text,
                start: "top bottom-=100",
                end: "top center",
                toggleActions: "play none none reverse",
                markers: false
            }
        }
    );
});