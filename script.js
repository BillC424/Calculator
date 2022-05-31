// DOM references 

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operation');
const solutionButton = document.getElementById('equals');


// Variables for storing calc input 

let numbers = [];
let operator = "";
let displayValue = "";

// Functions for operations

const add = function(numbers) {
	return numbers.reduce((previous, current) => {
    return previous + current;
  });
};

const subtract = function(numbers) {
	return numbers.reduce((previous, current) => {
    return previous - current;
  });
};

const multiply = function(numbers) {
    return numbers.reduce((previous, current) => {
      return previous * current;
    });
  };

  const divide = function(numbers) {
    return numbers.reduce((previous, current) => {
      return previous / current;
    });
  };  

const operate = function(numbers, operator) {
    displayValue = Number(displayValue);
    numbers.push(displayValue);
    displayValue = "";

    if (operator === "add") {
        display.textContent = add(numbers)
    } 
    if (operator === "subtract") {
        display.textContent = subtract(numbers)
    } 
    if (operator === "multiply") {
        display.textContent = multiply(numbers)
    } 
    if (operator === "divide") {
        display.textContent = divide(numbers)
    } 
}

// Functions for event listeners

function populateDisplay (number) {
    
    displayValue = displayValue + number;
    display.textContent = displayValue;

 };

 function operatorSelected (operatorClicked) {
    
    operator = operatorClicked;
    displayValue = Number(displayValue);
    numbers.push(displayValue);
    displayValue = "";
 };



// Button event listeners


numberButtons.forEach( (numberButton) => { numberButton.addEventListener ('click', e => populateDisplay(e.target.id) ); } );

operatorButtons.forEach( (operatorButton) => { operatorButton.addEventListener ('click', e => operatorSelected(e.target.id)  ); } );

solutionButton.addEventListener ('click', e => operate (numbers, operator) );
 