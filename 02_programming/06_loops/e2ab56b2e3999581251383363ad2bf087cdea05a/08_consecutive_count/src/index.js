function consecutiveCount(word, letter) {
  let currentCount = 0;
  let maxCount = 0;

  for (let i = 0; i < word.length; i++) {
    if (letter === word[i]) {
      currentCount++;
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
}

// Do not remove the following line, it is for tests
module.exports = consecutiveCount;
