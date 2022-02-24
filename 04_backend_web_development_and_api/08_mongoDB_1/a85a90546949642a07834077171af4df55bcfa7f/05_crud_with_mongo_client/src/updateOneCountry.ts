import { Db } from "mongodb";

type Country = {
  name: string,
  capital: string,
  continent: string,
}

export function updateOneCountry(db: Db):Promise<Country> {
  // code your function here
  return db.collection("worldAtlas")
  .updateOne({name: "Australia"}, {$set: {capital: "Canberra"}})
  .then(() => db.collection<Country>("worldAtlas").findOne({name: "Australia"}))

}
