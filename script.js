// this will perform an operation with 2 numbers

function add(a, b) {
    return (+a)+(+b);
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

 // this will perform a calculation after getting the operator and 2 numbers

function operate(operator, a, b) {
    if (operator == '+') {
        return add(a, b);
    }
    else if (operator == '-') {
        return subtract(a, b);
    }
    else if (operator == '*') {
        return multiply(a, b);
    }
    else if (operator == '/') {
        return divide(a, b);
    }
}

const display = document.querySelector('.display');
let displayValue;
let operation;

// populates display with number from input and removes the toggle of the previously selected operator button

const numbers = document.querySelectorAll('.number');

for (i=0; i<numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        for (i=0; i<operators.length; i++) {
            operators[i].classList.remove("toggle-button");
        }
        if (display.textContent == 0 || display.textContent == displayValue) {
            display.textContent = e.target.textContent;
        }
        else {
            display.textContent += e.target.textContent;
        }
    });
}

const operators = document.querySelectorAll('.operation');

// keyboard support for numbers

document.addEventListener('keydown', (e) => {
    if (isNaN(e.key) == false) {
        for (i=0; i<operators.length; i++) {
            operators[i].classList.remove("toggle-button");
        }
        if (display.textContent == 0 || display.textContent == displayValue) {
            display.textContent = e.key;
        }
        else {
            display.textContent += e.key;
        }
    }
});

// function that saves the current result in a variable based on the selected operator

function currentResult() {
    if (displayValue == undefined) {
        displayValue = display.textContent;
    }
    else {
        displayValue = operate(operation, displayValue, display.textContent);
    }
    display.textContent = displayValue;
}

// saves the selected operator and displays the current result

for (i=0; i<operators.length; i++) {
    operators[i].addEventListener('click', currentResult);
    operators[i].addEventListener('click', (e) => {
        operation = e.target.textContent;
        e.target.classList.add("toggle-button");
    });
}

// keyboard support for operations

document.addEventListener('keydown', (e) => {
    if (e.key == '+') {
        currentResult();
        operation = '+';
        document.querySelector("#add").classList.add("toggle-button");
    }
    else if (e.key == '-') {
        currentResult();
        operation = '-';
        document.querySelector("#subtract").classList.add("toggle-button");
    }
    else if (e.key == '*') {
        currentResult();
        operation = '*';
        document.querySelector("#multiply").classList.add("toggle-button");
    }
    else if (e.key == '/') {
        currentResult();
        operation = '/';
        document.querySelector("#divide").classList.add("toggle-button");
    }
})

let secondValue;
const equalsButton = document.querySelector('.equals');

// shows the final answer, rounds up digits after decimal to 6 digits to prevent overflowing the screen
// and prevents division by 0 notifying the user that they cannot do it

function finalCalculation() {
    secondValue = display.textContent;
    if (operation == '/' && secondValue == 0) {
        alert('Division by 0? Are you trying to break the universe?');
        secondValue = undefined;
        display.textContent = displayValue;
        document.querySelector("#divide").classList.add("toggle-button");
    }
    else {
        display.textContent = operate(operation, displayValue, secondValue);
        if (Number(display.textContent) % 1 != 0 && Number(display.textContent).toString().split('.')[1].length > 6) {
            display.textContent = Math.floor((Number(display.textContent))*1000000)/1000000;
        }
    }
}

equalsButton.addEventListener('click', finalCalculation);

// keyboard support for the equals button

document.addEventListener('keydown', (e) => {
    if (e.key == '=' || e.key == 'Enter') {
        e.preventDefault();
        finalCalculation();
    }
});

// button to reset everything

const clearButton = document.querySelector('.clear');

function clearFunction() {
    operation = undefined;
    displayValue = undefined;
    secondValue = undefined;
    display.textContent = 0;
    for (i=0; i<operators.length; i++) {
        operators[i].classList.remove("toggle-button");
    }
}

clearButton.addEventListener('click', clearFunction);

// keyboard support for reset button

document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
       clearFunction();
    }
});

// clear latest digit

const backspace = document.querySelector('.backspace');

function doBackspace() {
    display.textContent = display.textContent.substring(0,display.textContent.length-1);
}

backspace.addEventListener('click', doBackspace);

// keyboard support for backspace

document.addEventListener('keydown', (e) => {
    if (e.key == 'Backspace') {
        doBackspace();
    }
});

// button for decimals, prevent the user from using more than one decimal symbol

const decimal = document.querySelector('.decimal');

function addDecimal() {
    if (display.textContent.includes('.')) {
        return;
    }
    else {
        display.textContent += '.';
    }
}

decimal.addEventListener('click', addDecimal);

// keyboard support for decimal sign

document.addEventListener('keydown', (e) => {
    if (e.key == '.') {
        addDecimal();
    }
});