const findPosition = (listOfPerson, person, counter) => {
  // Code here
  if (
    Array.isArray(listOfPerson) &&
    typeof listOfPerson[0] === "string" &&
    typeof person === "string" &&
    Number.isInteger(counter)
  ) {
    if (listOfPerson.includes(person)) {
      return `${person} is at position #${listOfPerson.indexOf(person) + 1} in this array.`;
    } else {
      return `${person} is not present in this array.`;
    }
  } else {
    throw new Error(" A parameter is not of its expected type ");
  }
};

// Leave line below for tests to work properly
module.exports = findPosition;
