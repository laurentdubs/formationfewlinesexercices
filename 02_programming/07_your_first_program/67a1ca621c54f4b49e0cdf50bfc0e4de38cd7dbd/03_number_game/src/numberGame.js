function numberGame(reader, min = 1, max = 100) {
  console.log("Welcome!\n");
  console.log("You have to find the right number, between 1 and 100!\n");
  console.log("Good luck!!");

  const RandomNumber = getRandomNumber(min, max);
  function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function WhatIsYourNumber() {
    reader.question("Enter your number ?\n", (number) => {
      let chooseNumber = parseInt(number);
      if (!Number.isInteger(chooseNumber)) {
        console.log("This was not a number");
        WhatIsYourNumber();
      } else if (chooseNumber < min || chooseNumber > max) {
        console.log("The number is between 1 and 100");
        WhatIsYourNumber();
      } else if (chooseNumber < RandomNumber) {
        console.log("Too low");
        WhatIsYourNumber();
      } else if (chooseNumber > RandomNumber) {
        console.log("Too high");
        WhatIsYourNumber();
      } else if (chooseNumber === RandomNumber) {
        console.log("You won!");
        WhatIsYourNumber();
        reader.close();
      }
    });
  }
  WhatIsYourNumber();
}

module.exports = numberGame;
