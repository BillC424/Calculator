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
  