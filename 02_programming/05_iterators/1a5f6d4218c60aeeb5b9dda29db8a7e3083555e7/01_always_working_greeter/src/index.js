function greetOneperson(person){
  console.log(`Hello ${person}!`);
}

function greeter(listOfPeople) {
  listOfPeople.forEach(greetOneperson); 
}
greeter(["Joe", "Mike", "Robert", "Jose"]);

// Do not remove the following lines, it is for tests
module.exports = greeter;
