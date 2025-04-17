document.addEventListener('DOMContentLoaded', () => {
    const targetDate = new Date('April 26, 2025 11:00:00').getTime();
    const floatingCountdown = document.getElementById('floating-countdown');

    // Update countdown
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        floatingCountdown.querySelector('span').textContent = 
            `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Handle scroll visibility
    function handleScroll() {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        const countdownSpan = floatingCountdown.querySelector('span');
        
        if (scrollPercentage >= 10) {
            floatingCountdown.classList.remove('opacity-0', 'max-w-0');
            floatingCountdown.classList.add('opacity-100', 'max-w-[200px]');
            countdownSpan.classList.remove('translate-y-[20px]', 'opacity-0');
            countdownSpan.classList.add('translate-y-0', 'opacity-100');
        } else {
            floatingCountdown.classList.remove('opacity-100', 'max-w-[200px]');
            floatingCountdown.classList.add('opacity-0', 'max-w-0');
            countdownSpan.classList.add('translate-y-[20px]', 'opacity-0');
            countdownSpan.classList.remove('translate-y-0', 'opacity-100');
        }
    }

    // Initialize
    setInterval(updateCountdown, 1000);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});