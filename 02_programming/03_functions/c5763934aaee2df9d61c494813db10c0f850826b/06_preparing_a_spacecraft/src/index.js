function checkFuelLevel(fuelLevel) {
  // Code here

  if (fuelLevel > 20) {
    return "Fuel level: green";
  } else if (fuelLevel > 10) {
    return "Fuel level: yellow";
  } else {
    return "Fuel level: red";
  }
}

function checkCargoHold(cargoLoad) {
  // Code here
  if (cargoLoad.length === 4) {
    return "Full";
  } else if (cargoLoad.length < 4) {
    return `Spaces available: ${4 - cargoLoad.length}`;
  } else {
    return `Over capacity by ${cargoLoad.length - 4} items.`;
  }
}

// Do not remove last lines, it is for tests
module.exports = { checkFuelLevel, checkCargoHold };
