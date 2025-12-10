let number = 0;

const incrementButton = document.getElementById('increment-button');
const decrementButton = document.getElementById('decrement-button');
const numberDisplay = document.getElementById('number-display');
const retryButton = document.getElementById('retry-button');
const spacer = document.querySelector('.spacer');

incrementButton.addEventListener('click', () => {
    number += 1;
    updateDisplay();
});

decrementButton.addEventListener('click', () => {
    if (number > 0) {
        number -= 1;
        updateDisplay(); 
    }
});


retryButton.addEventListener('click', () => {
    number = 0;
    updateDisplay(); 
});


function updateDisplay() {
    numberDisplay.textContent = number;

    if (number === 0) {
        decrementButton.style.display = 'none'; 
        incrementButton.style.marginLeft = 'auto';
    } else {
        decrementButton.style.display = 'inline-block'; 
    }
}
updateDisplay();










