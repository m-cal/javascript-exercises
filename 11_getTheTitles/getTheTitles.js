const getTheTitles = function(books) {
  const toReturn = [];
  for (const book of books) {
    toReturn.push(book.title);
  }
  return toReturn;
}

// Do not edit below this line
module.exports = getTheTitles;
