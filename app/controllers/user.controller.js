import joi from "joi";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

import db from "../database/db";

export async function signUp(req, res) {
  try {
    const passwordHash = bcrypt.hashSync(req.body.password, SALT);
    const SALT = 10;
    
    await db.collection("users").insertOne({
      name: req.body.name,
      email: req.body.email,
      password: passwordHash
    });

    return res.status(201).send ("Usuario criado"); 
  } catch (error) {
    console.log("Erro ao criar usuario", error);
    return res.sendStatus(500);
  }

}
