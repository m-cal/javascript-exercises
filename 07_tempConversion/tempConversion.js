const ftoc = function(f) {
  if (f == 32) {
    return 0
  } 
  return Number((((f-32)*5)/9).toFixed(1));
};

const ctof = function(c) {
  return Number(((c * 1.8) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
