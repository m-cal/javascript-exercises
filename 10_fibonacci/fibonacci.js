const fibonacci = function(nthFib) {
  if (typeof nthFib === 'string') {
    nthFib = Number(nthFib);
  }
  if (nthFib < 0) {
    return 'OOPS';
  }
  if (nthFib == 1 || nthFib == 2) {
    return 1;
  }
  let arr = [1, 1, 2];
  for (let currentFibDigits = 3; currentFibDigits < nthFib; currentFibDigits++) {
    arr.push((arr[arr.length-1] + arr[arr.length-2]));
  }
  return arr[arr.length-1];
};

// Do not edit below this line
module.exports = fibonacci;