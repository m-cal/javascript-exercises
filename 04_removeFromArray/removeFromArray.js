const removeFromArray = function(arr, ...theRest) {
  const toReturn = [];

  arr.forEach(elem => {
    if (!theRest.includes(elem)) {
      toReturn.push(elem);
    }
  });
  return toReturn;
}

/* 

loop through each elem of arr
at each elem, loop through ...theRest
if there is a match, remove the original from arr


*/


// Do not edit below this line
module.exports = removeFromArray;
