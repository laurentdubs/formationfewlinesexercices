const numbers = [1, 2, 3, 4];
function mapLoop(numbers, callback) {
  // Code the function here.
  const resultToReturn = [];
  for (let i = 0; i < numbers.length; i++) {
    resultToReturn.push(callback(numbers[i]));
  }
  //console.log(resultToReturn);
  return resultToReturn;
}

//mapLoop(numbers, (x) => x * 2);
//yarn startconsole.log(mapLoop(numbers));
// Do not remove the following lines, it is for tests
module.exports = mapLoop;
