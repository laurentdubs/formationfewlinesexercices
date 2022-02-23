// write your MongoDB shell command here
const newCountry = {
  name: "France",
  capital: "Paris",
  continent: "Europe",
};

const countryOne = {
  name: "Japan",
  capital: "Tokyo",
  continent: "Asia",
};

const countryTwo = {
  name: "U.S.A.",
  capital: "New York",
  continent: "America",
};

db.worldAtlas.insertMany([newCountry, countryOne, countryTwo]);

db.worldAtlas.insertMany({ name: { $eq: "France" } });
db.worldAtlas.insertMany({ capital: { $eq: "Paris" } });
db.worldAtlas.insertMany({ continent: { $eq: "Europe" } });
