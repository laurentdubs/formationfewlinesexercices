import { MongoClient } from "mongodb";
import { deleteManyCountries } from "./deleteManyCountries";

import { showCollections } from "./showCollections";

const databaseUrl = `${process.env.MONGODB_DATABASE_URL}`

const client = new MongoClient(databaseUrl);
client.connect().then((client) => {
  const db = client.db();

  // You can test your query function by placing it here instead of `showCollections`
  deleteManyCountries(db)
    .then((result) => console.log(result))
    .then(() => client.close());
});
