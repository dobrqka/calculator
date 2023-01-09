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
    if (b == 0) {
        alert('Wise guy, eh!?');
        secondValue = '';
        display.textContent = '';
    }
    else {return a/b};
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
        numbers[i].addEventListener('click', (e) => {
            if (display.textContent == 0 || display.textContent == displayValue) {
                display.textContent = e.target.textContent;
            }
            else {
                display.textContent += e.target.textContent;
            }
        });
    }
}

const operators = document.querySelectorAll('.operation');

// keyboard support for numbers

document.addEventListener('keydown', (e) => {
   if (isNaN(e.key) == false) {
    
      if (display.textContent == 0 || display.textContent == displayValue) {
        display.textContent = e.key
      }
      else {
        display.textContent += e.key
      }
    //   for (i=0; i<operators.length; i++) {
    //     operators[i].classList.remove("toggle-button");
    //   }
   }
});

populateDisplay();


function currentOperation() {
    for (i=0; i<operators.length; i++) {
        // operators[i].addEventListener('click', () => {displayValue = operate(operation, displayValue, display.textContent)})
        // operators[i].addEventListener('click', () => {displayValue = display.textContent});

        operators[i].addEventListener('click', () => {
            if (displayValue == undefined) {
                displayValue = display.textContent;
            }
            else {
                displayValue = operate(operation, displayValue, display.textContent);
            }
        })
        operators[i].addEventListener('click', () => {console.log(displayValue)});
        operators[i].addEventListener('click', (e) => {operation = e.target.textContent});
        // operators[i].addEventListener('click', (e) => {e.target.classList.add("toggle-button")});
        operators[i].addEventListener('click', () => {display.textContent = displayValue});
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key == '+') {
        if (displayValue == undefined) {
            displayValue = display.textContent;
        }
        else {
            displayValue = operate(operation, displayValue, display.textContent);
        }
        operation = '+';
        display.textContent = displayValue;
    }
    else if (e.key == '-') {
        if (displayValue == undefined) {
            displayValue = display.textContent;
        }
        else {
            displayValue = operate(operation, displayValue, display.textContent);
        }
        operation = '-';
        display.textContent = displayValue;
    }
    else if (e.key == '*') {
        if (displayValue == undefined) {
            displayValue = display.textContent;
        }
        else {
            displayValue = operate(operation, displayValue, display.textContent);
        }
        operation = '*';
        display.textContent = displayValue;
    }
    else if (e.key == '/') {
        if (displayValue == undefined) {
            displayValue = display.textContent;
        }
        else {
            displayValue = operate(operation, displayValue, display.textContent);
        }
        operation = '/';
        display.textContent = displayValue;
    }
})

let secondValue;

currentOperation();

const equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', () => {secondValue = display.textContent});
equalsButton.addEventListener('click', () => {display.textContent = operate(operation, displayValue, secondValue)});
document.addEventListener('keydown', (e) => {
    if (e.key == '=' || e.key == 'Enter') {
        secondValue = display.textContent;
        display.textContent = operate(operation, displayValue, secondValue);
        if (Number(display.textContent) % 1 != 0 && Number(display.textContent).toString().split('.')[1].length > 6) {
            display.textContent = Number(display.textContent).toFixed(6);
        }
    }
});
// button to reset

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {operation = ''});
clearButton.addEventListener('click', () => {displayValue = undefined});
clearButton.addEventListener('click', () => {secondValue = ''});
clearButton.addEventListener('click', () => {display.textContent = '0'});
document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        operation = '';
        displayValue = undefined;
        secondValue = '';
        display.textContent = '0';
    }
});

// clear latest digit

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', () => {display.textContent = display.textContent.substring(0,display.textContent.length-1)})
document.addEventListener('keydown', (e) => {
    if (e.key == 'Backspace')
    {
        display.textContent = display.textContent.substring(0,display.textContent.length-1)
    }
})

// document.addEventListener('keydown', (e) => {console.log(e.key)})


// add a . button for decimals, don't let the user type more than one decimal symbol

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', () => {
    if (display.textContent.includes('.')) {
        return;
    }
    else {
        display.textContent += '.'
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key == '.') {
        if (display.textContent.includes('.')) {
            return;
        }
        else {
            display.textContent += '.'
        }
    }
})

// toggle operator buttons
// add the option to use negative numbers
// fix division by 0 crashing calculator while running it mid-calculation