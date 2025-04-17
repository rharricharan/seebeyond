document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageContainer = document.querySelector('.scroll-image');
  
  gsap.timeline({
    scrollTrigger: {
      trigger: imageContainer,
      start: "top center",
      end: "bottom center",
      scrub: true,
      onEnter: () => {
        gsap.to(imageContainer, {
          scale: 1.05,
          borderRadius: 0,
          duration: 0.25,
          ease: "power2.easeInOut"
        });
      },
      onLeave: () => {
        gsap.to(imageContainer, {
          scale: 0.8,
          borderRadius: "16px",
          duration: 0.25,
          ease: "power2.easeInOut"
        });
      },
      onEnterBack: () => {
        gsap.to(imageContainer, {
          scale: 1.05,
          borderRadius: 0,
          duration: 0.25,
          ease: "power2.easeInOutBack"
        });
      },
      onLeaveBack: () => {
        gsap.to(imageContainer, {
          scale: 1,
          borderRadius: "16px",
          duration: 0.25,
          ease: "power2.easeInOut"
        });
      }
    }
  });
});