const add = function(firstNum,secondNum) {
	return firstNum+secondNum;
};

const subtract = function(firstNum,secondNum) {
	return firstNum-secondNum;
};

const sum = function(num) {
	return num.reduce((sums, current) => sums + current, 0);
};

const multiply = function(num) {
  return num.reduce((sums, current) => sums * current);
};

const power = function(firstNum,secondNum) {
  return firstNum**secondNum;
  // return math.pow(firstNum,secondNum)
};

const factorial = function(n) {
  if (n === 0 || n === 1){
    return 1;
  }
  return n * factorial(n - 1);
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
