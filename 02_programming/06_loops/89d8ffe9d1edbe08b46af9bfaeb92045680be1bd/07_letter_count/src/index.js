function letterCount(word, letter) {
  // Code here
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === letter) {
      count++;
    }
  }
  return count;
}
letterCount("gattaca", "a");
console.log(letterCount("gattaca", "a"));
console.log(letterCount("azerty", "b"));
// Do not remove the following line, it is for tests
module.exports = letterCount;
