function sing() {
  const lyricsForTheSong = [];

  for (let i = 99; i > 0; i--) {
    if (i > 2) {
      lyricsForTheSong.push(
        `${i} bottles of beer on the wall, ${i} bottles of beer.`,
        `Take one down and pass it around, ${i - 1} bottles of beer on the wall.`,
      );
    } else if (i === 2) {
      lyricsForTheSong.push(
        `${i} bottles of beer on the wall, ${i} bottles of beer.``Take one down and pass it around, ${
          i - 1
        } bottle of beer on the wall.`,
      );
    } else {
      lyricsForTheSong.push(
        `${i} bottle of beer on the wall, ${i} bottle of beer.``Take one down and pass it around, no more bottles of beer on the wall.`,
      );
    }
    lyricsForTheSong.push("No more bottles of beer on the wall, no more bottles of beer.");
    lyricsForTheSong.push("Go to the store and buy some more, 99 bottles of beer on the wall.");

    return lyricsForTheSong;
  }
}

// Do not remove the following line, it is for tests
module.exports = sing;
