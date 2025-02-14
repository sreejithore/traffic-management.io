// Additional interactivity or animations can be added here
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.animated-card');
    const button = document.querySelector('.animated-button');

    // Add hover effect to the card
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.1)';
    });

    // Add click effect to the button
    button.addEventListener('click', () => {
        alert('You clicked the button!');
    });
});