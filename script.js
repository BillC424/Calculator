// DOM references 

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operation');
const solutionButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

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
        displayValue = add(numbers);
    } 
    if (operator === "subtract") {
        displayValue = subtract(numbers);
        
    } 
    if (operator === "multiply") {
        displayValue = multiply(numbers);
    } 
    if (operator === "divide") {
        displayValue = divide(numbers);
    } 
        display.textContent = displayValue;
        numbers.splice(0,2, displayValue);
        displayValue = "";
        console.log(numbers);
}

// Functions for event listeners

function populateDisplay (number) {
    
    displayValue = displayValue + number;
    display.textContent = displayValue;

 };

 function operatorSelected (operatorClicked) {
    
    if (operator !== "") {
        operate (numbers, operator)
    }

    operator = operatorClicked;

    if (displayValue !== "") {
    displayValue = Number(displayValue);
    numbers.push(displayValue);
    displayValue = ""; }
    
    console.log(numbers);



 };

 function clear (numbers, displayValue) {
      operator = "";
      displayValue = "";
      numbers.splice(0,2);
      display.textContent = displayValue;
      console.log(numbers);
 };

// Button event listeners

numberButtons.forEach( (numberButton) => { numberButton.addEventListener ('click', e => populateDisplay(e.target.id) ); } );

operatorButtons.forEach( (operatorButton) => { operatorButton.addEventListener ('click', e => operatorSelected(e.target.id)  ); } );

solutionButton.addEventListener ('click', e => operate (numbers, operator) );

clearButton.addEventListener ('click', e => clear(numbers,displayValue) );
 