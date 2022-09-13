import {MongoClient} from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
let db = null;
const mongoClient = new MongoClient(`mongodb+srv://${dbUser}:${dbPass}@cluster0.cstmyax.mongodb.net/?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

try {
  await mongoClient.connect();
  db = mongoClient.db(process.env.DATABASE);
  console.log("MongoDB database connected.")
} catch (error) {
  console.log("Erro connecting to database.");
  console.log(error);
}

export default db;