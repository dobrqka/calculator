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

function operate(operator, a, b) {
    if (operator == '+') {
        return add(a, b);
    }
    else if (operator == '-') {
        return subtract (a, b);
    }
    else if (operator == '*') {
        return multiply(a, b);
    }
    else if (operator == '/') {
        return divide(a, b);
    }
}

const display = document.querySelector('.display')
let displayValue;
let operation;

function populateDisplay() {
    const numbers = document.querySelectorAll('.number');
    for (i=0; i<numbers.length; i++) {
        numbers[i].addEventListener('click', (e) => {display.textContent += e.target.textContent});
        // numbers[i].addEventListener('click', (e) => {displayValue += e.target.textContent});
        // numbers[i].addEventListener('click', () => {console.log(displayValue)});
    }
}

populateDisplay();

const operators = document.querySelectorAll('.operation');

function currentOperation() {
    for (i=0; i<operators.length; i++) {
       // operators[i].addEventListener('click', (e) => {operation = e.target.textContent});
        operators[i].addEventListener('click', (e) => {operation = e.target.textContent});
        operators[i].addEventListener('click', () => {displayValue = display.textContent});
        operators[i].addEventListener('click', () => {console.log(operation)});
        operators[i].addEventListener('click', () => {console.log(displayValue)});
        operators[i].addEventListener('click', () => {display.textContent = ''});
    }
}

let secondValue;

currentOperation();

const equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', () => {secondValue = display.textContent});
equalsButton.addEventListener('click', () => {console.log(secondValue)});
equalsButton.addEventListener('click', () => {display.textContent = operate(operation, displayValue, secondValue)});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {operation = ''});
clearButton.addEventListener('click', () => {displayValue = ''});
clearButton.addEventListener('click', () => {secondValue = ''});
clearButton.addEventListener('click', () => {display.textContent = ''});

// clear latest digit

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', () => {display.textContent = display.textContent.substring(0,display.textContent.length-1)})