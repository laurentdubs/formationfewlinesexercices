const identityForm = (reader) => {
  // Code here
  reader.question("What is your first name ?\n", (firstName) => {
    //console.log(`Your first name is ${firstName}.`);
    reader.question("What is your last name ?\n", (lastName) => {
      //console.log(`Your first name is ${firstName}, your lastname is ${lastName}.`);
      reader.question("What is your age ?\n", (age) => {
        console.log(`Your name is ${firstName} ${lastName} and you are ${age}.`);
        reader.close();
      });
    });
  });
};

// Leave line below for tests to work
module.exports = identityForm;
