const palindromes = function (str) {
  let comparator1 = str.split(' ').join('').toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  console.log(comparator1);
  let comparator = str.split(' ').join('').split('').reverse().join().toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  console.log(comparator);
  if (comparator1 == comparator) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
