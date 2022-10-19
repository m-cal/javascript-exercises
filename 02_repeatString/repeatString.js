const repeatString = function(str, n) {
  if (n < 0) {
    return 'ERROR';
  }
  let toReturn = '';
  for (i = 0; i < n; i++) {
    toReturn += str;
  }
  return toReturn;
};

// Do not edit below this line
module.exports = repeatString;
