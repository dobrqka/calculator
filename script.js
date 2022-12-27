function add(a, b) {
    return a+b;
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

function populateDisplay() {
    const numbers = document.querySelectorAll('.number');
    for (i=0; i<numbers.length; i++) {
        numbers[i].addEventListener('click', (e) => {display.textContent = e.target.textContent});
        numbers[i].addEventListener('click', (e) => {displayValue = e.target.textContent});
        numbers[i].addEventListener('click', () => {console.log(displayValue)});
    }
}

populateDisplay();

const operators = document.querySelectorAll('.operation');
let operation;

function currentOperation() {
    for (i=0; i<operators.length; i++) {
        operators[i].addEventListener('click', (e) => {operation = e.target.textContent});
        operators[i].addEventListener('click', () => {console.log(operation)});
    }
}

currentOperation();