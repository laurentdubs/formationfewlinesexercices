const readyForm = (reader) => {
  // Code here
  reader.question("Hello user! Are you ready for today??!", (message) => {
    console.log(`WOW, ${message} ??!! Really Nice! Let's goo !!.`);
    reader.close();
  });
};

// Leave line below for tests to work
module.exports = readyForm;
