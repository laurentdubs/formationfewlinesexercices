// > Frieda and Francis walk on the street. Frieda is 22 and Francis is 17.

// Create two objects, `frieda`, `francis` with the fields :
//   `age` (an integer) and `name`, (obviously a string)
const francis = {
  age : 17,
  name : "Francis",
};
const frieda = {
  age : 22,
  name : "Frieda",
};


// Create two variables `canFriedaDrinkAlcohol` and `canFrancisDrinkAlcohol` to answer,
// respectively, to the question "Can he / she drink alcohol?".
let canFriedaDrinkAlcohol = null;
let canFrancisDrinkAlcohol = null;

francis.age >= 18 ? canFrancisDrinkAlcohol = true : canFrancisDrinkAlcohol = false;

frieda.age >= 18 ? canFriedaDrinkAlcohol = true : canFriedaDrinkAlcohol = false;