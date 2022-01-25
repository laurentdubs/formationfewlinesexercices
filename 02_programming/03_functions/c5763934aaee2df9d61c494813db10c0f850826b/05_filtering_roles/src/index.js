function filteredRoles(persons, roles = "Teacher") {
  // Code the function here.
  const mySortedArray = [];

  if (persons[0].role === roles) {
    mySortedArray.push({ name: persons[0].name, role: roles });
  }
  if (persons[1].role === roles) {
    mySortedArray.push({ name: persons[1].name, role: roles });
  }
  if (persons[2].role === roles) {
    mySortedArray.push({ name: persons[2].name, role: roles });
  }
  if (persons[3].role === roles) {
    mySortedArray.push({ name: persons[3].name, role: roles });
  }
  return mySortedArray;
}

// Do not remove lines below, it is for tests
module.exports = filteredRoles;
