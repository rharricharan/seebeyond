document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.circular-text span');
    const characters = text.textContent.split('');
    // Update the radius value
    const radius = 40; // Adjust this value to make circle larger or smaller
    const angleStep = (2 * Math.PI) / characters.length;
    
    text.textContent = '';
    
    characters.forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.position = 'absolute';
        
        // Calculate position on circle
        const angle = i * angleStep;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        
        // Position and rotate each character to face inward
        span.style.transform = `translate(${x}px, ${y}px) rotate(${(angle * (180/Math.PI)) + 180}deg)`;
        span.style.transformOrigin = 'center';
        text.appendChild(span);
    });
});