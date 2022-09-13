import joi from "joi";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

import db from "./../db.js";

export async function signUp(req, res) {
  try {
    const SALT = 10;
    const passwordHash = bcrypt.hashSync(req.body.password, SALT);
    
    await db.collection("users").insertOne({
      name: req.body.name,
      email: req.body.email,
      password: passwordHash
    });

    return res.sendStatus(201); // created
  } catch (error) {
    console.log("Error creating new user.");
    console.log(error);
    return res.sendStatus(500);
  }

}
