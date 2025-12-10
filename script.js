let number = 0;
let darkmode = false;

const incrementButton = document.getElementById('increment-button');
const decrementButton = document.getElementById('decrement-button');
const numberDisplay = document.getElementById('number-display');
const retryButton = document.getElementById('retry-button');
const darkmodeButton = document.getElementById('dark-mode-button');
const lightmodeButton = document.getElementById('light-mode-button');

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

darkmodeButton.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    darkmode = true;
    darkmodeButton.style.display = 'none';
    lightmodeButton.style.display = 'inline-block';
});

lightmodeButton.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    darkmode = false;
    darkmodeButton.style.display = 'inline-block';
    lightmodeButton.style.display = 'none';
});

if (darkmode) {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}









