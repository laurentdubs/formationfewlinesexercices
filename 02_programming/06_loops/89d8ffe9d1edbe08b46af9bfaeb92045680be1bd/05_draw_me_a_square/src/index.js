function square(sizeOfSquare) {
  // Code here
  let size = "";
  //console.log(sizeOfSquare.length);

  for (let i = 0; i < sizeOfSquare; i++) {
    size = size + "*";
  }
  for (let i = 0; i < sizeOfSquare; i++) {
    console.log(size);
  }
}
square(5);

// Do not remove the following line, it is for tests
module.exports = square;
