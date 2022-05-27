// Functions for operations

const add = function(...args) {
	return args.reduce((previous, current) => {
    return previous + current;
  }, 0);
};

const subtract = function(...args) {
	return args.reduce((previous, current) => {
    return previous - current;
  });
};

const multiply = function(...args) {
    return args.reduce((previous, current) => {
      return previous * current;
    });
  };

  const divide = function(...args) {
    return args.reduce((previous, current) => {
      return previous / current;
    });
  };  

const operate = function(number, operator, number) {
    if (operator === "+") {
        return add(number,number)
    } 
    if (operator === "-") {
        return subtract(number,number)
    } 
    if (operator === "*") {
        return multiply(number,number)
    } 
    if (operator === "/") {
        return divide(number,number)
    } 
}

// Variables for storing calc input 

let firstNum = "input from number buttons before operator is selected";
let operator = "operator button that is selected"
let secondNum = "input from number buttons until = or another operator is selected"

// DOM references 

let display = document.getElementById('display');


// Functions for event listeners

function populateDisplay (number) {
    display.textContent = number;
 };

// Button event listeners

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach( (numberButton) => { numberButton.addEventListener ('click', e => populateDisplay(e.target.id) ); } );



 