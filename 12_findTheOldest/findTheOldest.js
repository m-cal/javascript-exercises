const findTheOldest = function(people) {
  const ages = [];
  console.log(ages);
  for (let person = 0; person < people.length; person++) {
    if (!people[person].yearOfDeath) {
      ages.push((new Date().getFullYear()) - people[person].yearOfBirth);
    } else {
      ages.push(people[person].yearOfDeath - people[person].yearOfBirth);
    }
  }
  const agesArr =  ages.sort((a, b) => {return a - b});
  const oldest = agesArr.reverse()[0];
  const oldestPerson = people.find((person) => {
    if (!person.yearOfDeath) {
     return ((new Date().getFullYear()) - person.yearOfBirth) == oldest;
    } else { 
      return person.yearOfDeath - person.yearOfBirth == oldest;
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
