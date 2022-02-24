import { Db } from "mongodb";

type Country = {
  name: string;
  capital: string;
  continent: string;
};

export function findOneCountry(db: Db): Promise<Country> {
  // code your function here

  return db.collection<Country>("worldAtlas").findOne({ name: "Iceland" })
  
  
}
