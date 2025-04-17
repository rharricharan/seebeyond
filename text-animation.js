document.addEventListener('DOMContentLoaded', () => {
  // Split text into individual characters for more granular animation
  const mainText = document.querySelector('.hero-text');
  const subText = document.querySelector('.hero-text span');
  
  // Set initial states
  gsap.set(mainText, { perspective: 400 });
  gsap.set(mainText.children[0].textContent.split(''), { 
    opacity: 0,
    y: () => gsap.utils.random(100, 200),
    rotateX: () => gsap.utils.random(-90, 90),
    filter: 'blur(10px)'
  });
  gsap.set(subText, { 
    opacity: 0,
    scale: 1.2,
    y: 50,
    filter: 'blur(20px)'
  });

  // Create animation timeline
  const tl = gsap.timeline({
    defaults: {
      ease: "elastic.out(1, 0.3)",
      duration: 2
    }
  });

  tl.to(mainText.children[0].textContent.split(''), {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    stagger: {
      amount: 0.8,
      from: "random"
    }
  })
  .to(subText, {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    ease: "power4.out",
    duration: 1.5
  }, "-=1");

  // Add hover effect
  mainText.addEventListener('mouseenter', () => {
    gsap.to(mainText.children[0].textContent.split(''), {
      y: () => gsap.utils.random(-5, 5),
      rotateX: () => gsap.utils.random(-10, 10),
      stagger: {
        amount: 0.2,
        from: "random"
      },
      ease: "power2.inOut"
    });
  });

  mainText.addEventListener('mouseleave', () => {
    gsap.to(mainText.children[0].textContent.split(''), {
      y: 0,
      rotateX: 0,
      stagger: {
        amount: 0.2,
        from: "random"
      },
      ease: "power2.inOut"
    });
  });
});