function addition(a, b,) {
  // Code here
  return  a + b;
}

function substraction(a, b,) {
  // Code here
  return a - b;
}

function multiplication(a, b,) {
  // Code here
  return  a * b;
}

function division(a, b,) {
  // Code here
  return a / b;
}

function chooseOperation(a, b , cb) {
  // Code here 
  if ( Number.isInteger(a) && Number.isInteger(b)){
    return cb(a, b);
  }
  else {
    throw new Error("It's not a number ");
  }
  
}
const result = chooseOperation(2, 2, addition);
console.log(result);

// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
