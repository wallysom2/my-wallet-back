import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import db from "../database/db";

export async function login (req, res) {
    try {
      const user = await db.collection("users").findOne({email: req.body.email});
      if(!user) return res.sendStatus(404);
  
      if(user && bcrypt.compareSync(req.body.password, user.password)) {
        const token = uuid();
        await db.collection("sessions").insertOne({token, userId: user._id});
        return res.send({token, name: user.name});
      }
  
      return res.sendStatus(404);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }

  export async function register (req, res) {
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
  
  export async function logout(req, res) {
    const {authorization} = req.headers;
    const token = authorization?.replace("Bearer", "").trim();
    if(!token) return res.send(403);
    
    try {
      await db.collection("sessions").deleteOne({token});
      res.sendStatus(200);
    } catch (error) {
      console.log("Nao foi possivel realizar o logout", error);
      return res.sendStatus(500);
    }
}
