const arraysIntoObjects = (keysArray, valuesArray) => {
  /// Code your function here
  let finalObject = {};

  for (let i = 0; i < keysArray.length; i++) {
    finalObject[keysArray[i]] = valuesArray[i];
  }

  return finalObject;
};

// Don't change this line for tests to run properly
export default arraysIntoObjects;
