type MyTuple = [string, number];
//const plop: MyTuple = ["hello", 42]; 
function handleTuple(tuple: MyTuple): void {
// Code the function here.
  if (typeof tuple[0] === "string") {
    console.log(`${tuple[0]} is a string`);
    
  }
  if (typeof tuple[1] === "number") {
    console.log(`${tuple[1]} is a number`);
    
  }
}


handleTuple(["foo", 42]);
//console.log(handleTuple(["foo", 42]));


// Leave the line below for tests to work properly.
export { handleTuple };
