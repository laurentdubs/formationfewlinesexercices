import { strictEqual } from "assert";
import { Db, OptionalId } from "mongodb";

type Country = {
    name: string,
    capital: string,
    continent: string,
}

export  function insertManyCountries(db: Db, newCountries: Country[]): Promise<number> {
  // code your function here
  return  db.collection("worldAtlas")
  .insertMany(newCountries)
  .then((countries) => countries.insertedCount)
  
}
