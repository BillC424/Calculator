// DOM references 

let display = document.getElementById('display');

// Variables for storing calc input 

let firstNum = "";
let operator = "operator button that is selected"
let secondNum = "";

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

// Functions for event listeners

function populateDisplay (number) {
    let stringToNumber = Number(number);
    firstNum = firstNum + number;
    display.textContent = number;
    console.log(firstNum);
   
 };

 function operatorSelected (operator) {
    
    console.log(operator);
   
 };

// Button event listeners

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach( (numberButton) => { numberButton.addEventListener ('click', e => populateDisplay(e.target.id) ); } );

const operatorButtons = document.querySelectorAll('.operation');
operatorButtons.forEach( (operatorButton) => { operatorButton.addEventListener ('click', e => operatorSelected(e.target.id)  ); } );


 