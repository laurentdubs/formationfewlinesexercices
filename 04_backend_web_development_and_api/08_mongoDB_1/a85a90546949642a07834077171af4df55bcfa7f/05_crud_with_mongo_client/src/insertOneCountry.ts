import { ClientRequest } from "http";
import { Db, OptionalId } from "mongodb";

type Country = {
  name: string,
  capital: string,
  continent: string,
}


export function insertOneCountry(db: Db, country: Country) {
  // code your function here
 return db.collection<Country>("worldAtlas")
 .insertOne(country)
 .then((country) => country.insertedId)
}
