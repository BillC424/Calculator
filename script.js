// DOM references 

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operation');
const solutionButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const decimalButton = document.getElementById('.');

// Variables for storing calc input 

let numbers = [];
let operator = "";
let displayValue = "";
let decimal = "";

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

const operate = function() {
    if (operator === "" && numbers !== []) {
        alert("You can't do that! Start over")
        displayValue = "";
        display.textContent = displayValue;
        numbers.splice(0,2)
        return
    }

    if (numbers !== [] && operator !== "" && displayValue === "") {
        alert("You can't do that! Enter a number before selecting the = sign")
        return
    }

    if (operator === "divide" && displayValue === "0") {
        alert("Look this Calc Boy is running on two AA batteries and will die if you try to divide by 0. Pick a different number instead.")
        displayValue = "";
        return
    }

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
        
        displayValue = roundHalfUp(displayValue, 2);
        display.textContent = displayValue;
        numbers.splice(0,2, displayValue);
        operator = "";
        displayValue = "";
        console.log(numbers);
        
}

// Functions for event listeners

function populateDisplay (number) {

    if (displayValue.includes(".") === true && number === ".") {
        return
    }
    
    displayValue = displayValue + number;
    display.textContent = displayValue;


 };

 function operatorSelected (operatorClicked) {
    console.log(operator);
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

 function roundHalfUp(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

 function clear () {

      operator = "";
      displayValue = "";
      numbers.splice(0,2);
      display.textContent = displayValue;
      console.log(numbers);
      console.log(displayValue)
 };

 /*function decimalCheck (d) {
     if (d !== "")  {
         console.log("don't do that");
     }

     decimal = d;
 }*/

// Button event listeners

numberButtons.forEach( (numberButton) => { numberButton.addEventListener ('click', e => populateDisplay(e.target.id) ); } );

decimalButton.addEventListener ('click', e => populateDisplay(e.target.id) );

operatorButtons.forEach( (operatorButton) => { operatorButton.addEventListener ('click', e => operatorSelected(e.target.id)  ); } );

solutionButton.addEventListener ('click', e => operate (numbers, operator) );

clearButton.addEventListener ('click', e => clear(numbers,displayValue) );


 