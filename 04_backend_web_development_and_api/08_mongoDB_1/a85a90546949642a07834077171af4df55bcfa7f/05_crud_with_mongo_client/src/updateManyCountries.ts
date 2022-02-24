import { Db } from "mongodb";

type Country = 
  {
  name: string,
  capital: string,
  continent: string,
}


export function updateManyCountries(db: Db): Promise<Country[]> {
  // code your function here
  return db.collection("worldAtlas")
  .updateMany({continent: "Europe"}, {$set: {continent: "EU"}})
  .then(() => db.collection<Country>("worldAtlas").find({continent: "EU"}).toArray());
}
