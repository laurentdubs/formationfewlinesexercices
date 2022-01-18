const numbers = [1, 2, 3, 4];

function forEachLoop(numbers, callback) {
  // Code the function here.) {
  for (let i = 0; i < numbers.length; i++) {
    callback(numbers[i]);
  }
}
function log(number) {
  console.log(`- ${number}`);
}

forEachLoop(numbers, log);
// Do not remove the following lines, it is for tests
module.exports = forEachLoop;
