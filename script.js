let number = 0;

incrementButton = document.getElementById('increment-button');
decrementButton = document.getElementById('decrement-button');
numberDisplay = document.getElementById('number-display');
retryButton = document.getElementById('retry-button');

incrementButton.addEventListener('click', () => {
    number += 1;
    numberDisplay.textContent = number; 
});

decrementButton.addEventListener('click', () => {
    if (number > 0)
    number -= 1;
    numberDisplay.textContent = number; 
});

retryButton.addEventListener('click', () => {
    number = 0;
    numberDisplay.textContent = number;
});










