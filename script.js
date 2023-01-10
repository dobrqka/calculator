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
}


// keyboard support for numbers

document.addEventListener('keydown', (e) => {
   if (isNaN(e.key) == false) {
    for (i=0; i<operators.length; i++) {
        operators[i].classList.remove("toggle-button");
      }
      if (display.textContent == 0 || display.textContent == displayValue) {
        display.textContent = e.key
      }
      else {
        display.textContent += e.key
      }
   }
});

populateDisplay();

const operators = document.querySelectorAll('.operation');

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
        operators[i].addEventListener('click', (e) => {e.target.classList.add("toggle-button")});
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
        document.querySelector("#add").classList.add("toggle-button");
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
        document.querySelector("#subtract").classList.add("toggle-button");
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
        document.querySelector("#multiply").classList.add("toggle-button");
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
        document.querySelector("#divide").classList.add("toggle-button");
        display.textContent = displayValue;
    }
})

let secondValue;

currentOperation();

const equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', () => {secondValue = display.textContent});
equalsButton.addEventListener('click', () => {
    if (operation == '/' && secondValue == 0) {
        alert('Division by 0? Are you trying to break the universe?');
        secondValue = undefined;
        display.textContent = displayValue;
        document.querySelector("#divide").classList.add("toggle-button");
    }
    else { 
        display.textContent = operate(operation, displayValue, secondValue)
        if (Number(display.textContent) % 1 != 0 && Number(display.textContent).toString().split('.')[1].length > 6) {
            display.textContent = Number(display.textContent).toFixed(6);
        }
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key == '=' || e.key == 'Enter') {
        e.preventDefault();
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
            display.textContent = Number(display.textContent).toFixed(6);
            }
        }
    }
});
// button to reset

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {operation = undefined});
clearButton.addEventListener('click', () => {displayValue = undefined});
clearButton.addEventListener('click', () => {secondValue = undefined});
clearButton.addEventListener('click', () => {display.textContent = '0'});
clearButton.addEventListener('click', () => {
    for (i=0; i<operators.length; i++) {
        operators[i].classList.remove("toggle-button");
      }
})
document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        operation = undefined;
        displayValue = undefined;
        secondValue = undefined;
        display.textContent = '0';
        for (i=0; i<operators.length; i++) {
            operators[i].classList.remove("toggle-button");
          }
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

const negative = document.querySelector('.negative');
negative.addEventListener('click', () => {
    display.textContent = -display.textContent;
})

document.addEventListener('keydown', (e) => {
    if (e.key == '_') {
        e.preventDefault();
        display.textContent = -display.textContent;
    }
});

// tidy up js code