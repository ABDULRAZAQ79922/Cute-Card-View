document.addEventListener('DOMContentLoaded', () => {
    const cardButton = document.getElementById('cardButton');
    cardButton.addEventListener('click', () => {
        alert('Button clicked! Have a great day!');
        cardButton.style.backgroundColor = '#4CAF50';
        cardButton.textContent = 'Clicked!';
    });
});
