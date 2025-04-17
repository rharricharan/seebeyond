document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up', 'opacity-100');
        entry.target.classList.remove('opacity-0', 'translate-y-[20px]');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.scroll-animate').forEach((element) => {
    element.classList.add('opacity-0', 'translate-y-[20px]');
    observer.observe(element);
  });
});