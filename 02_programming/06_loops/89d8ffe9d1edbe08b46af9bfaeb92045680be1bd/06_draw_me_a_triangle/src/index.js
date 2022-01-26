function triangle(heightOfTriangle) {
  // Code here
  let height = "";

  for (let i = 0; i < heightOfTriangle; i++) {
    height += "*";
    console.log(height);
  }
}
triangle(4);
// Do not remove the following line, it is for tests
module.exports = triangle;
