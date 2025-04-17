document.addEventListener('DOMContentLoaded', () => {
    const eventDate = new Date('April 26, 2025 11:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Add leading zeros
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        // Add animation effect on number change
        const elements = ['days', 'hours', 'minutes', 'seconds'];
        elements.forEach(el => {
            const element = document.getElementById(el);
            element.style.transform = 'scale(1)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 100);
        });

        if (timeLeft < 0) {
            clearInterval(countdownTimer);
            document.querySelector('.countdown-timer').innerHTML = '<span class="text-[#2D68F0]">Event has started!</span>';
        }
    }

    // Update countdown immediately and then every second
    updateCountdown();
    const countdownTimer = setInterval(updateCountdown, 1000);
});