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
  