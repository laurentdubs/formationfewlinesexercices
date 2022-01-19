const identityForm = (reader) => {
  // Code here
  reader.question("What is your first name ?\n", (firstname) => {
    console.log(`Your first name is ${firstname}.`);

    reader.question("What is your last name ?\n", (lastname) => {
      console.log(`Your first name is ${firstname}, your last name is ${lastname}.`);

      reader.question("What is your age ?\n", (age) => {
        console.log(`Your name is ${firstname} ${lastname} and you are ${age}.`);

        //reader.question("What is your first name, last name and your age ?\n", (firstname, lastname, age) => {
        //console.log(`Your name is ${firstname} ${lastname} and you are ${age}`);

        reader.close();
        //});
      });
    });
  });
};

// Leave line below for tests to work
module.exports = identityForm;
