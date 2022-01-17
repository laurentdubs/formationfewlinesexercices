function theEFilter(sentences) {
  const arrayWithE = sentences.filter((word) => {
    return word.includes("e") || word.includes("E");
  });
  return arrayWithE;
  
}

// Do not remove the following line, it is for tests
module.exports = theEFilter;
