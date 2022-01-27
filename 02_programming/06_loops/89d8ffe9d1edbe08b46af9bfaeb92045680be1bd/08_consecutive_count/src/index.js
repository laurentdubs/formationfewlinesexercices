function consecutiveCount(word, letter) {
  // Code here
  let countLetter = 0;
  let countStreakLetter = 0;

  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === letter) {
      countLetter++;
    } else {
      if (countLetter > countStreakLetter) {
        countStreakLetter = countLetter;
        countLetter = 0;
      } else {
        countLetter = 0;
      }
    }

    if (countStreakLetter === 0) {
      return 0;
    } else {
      return countStreakLetter;
    }
  }
}
consecutiveCount("aaabcaaba", "a");
console.log(consecutiveCount("aaabcaaba", "a"));
consecutiveCount("utuutuuuuutuu", "u");

// Do not remove the following line, it is for tests
module.exports = consecutiveCount;
