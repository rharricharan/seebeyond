document.addEventListener('DOMContentLoaded', () => {
  // Set initial state
gsap.set('.hero-text', { opacity: 0, y: 30 });
  gsap.set('.hero-text span', { opacity: 0, y: 30 });

  // Create animation timeline
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    }
  });

  tl.to('.hero-text', {
    opacity: 1,
    y: 0,
    duration: 0.65,
  })
  .to('.hero-text span', {
    opacity: 1,
    y: 0,
    duration: 0.55,
    delay: 0.2
  }, "-=0.5"); // Start slightly before the first animation ends
});