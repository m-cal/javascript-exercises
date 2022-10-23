const add = function(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	if (arr.length == 0) {
    return 0;
  } else if (arr.length == 1) {
    return arr[0];
  } else {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
};

const multiply = function(numArr) {
  let total = 1;
  for (let num of numArr) {
    total *= num;
  }
  return total;
};

const power = function() {
	
};

const factorial = function() {
	
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
