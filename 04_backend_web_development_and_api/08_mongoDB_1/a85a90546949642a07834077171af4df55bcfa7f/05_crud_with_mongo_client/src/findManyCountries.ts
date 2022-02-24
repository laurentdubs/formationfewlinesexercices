import { Db } from "mongodb";

type Country = {
  name: string;
  capital: string;
  continent: string;
};


export function findManyCountries(db: Db): Promise<Country[]> {
  // code your function here
  return db.collection<Country>("worldAtlas")
  .find({ continent: "Europe" })
  .toArray() 
}
