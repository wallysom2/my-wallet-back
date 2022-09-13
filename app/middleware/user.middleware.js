import db from "../database/db";

export async function getUser(req, res, next) {
  const {authorization} = req.headers;
  const token = authorization?.replace("Bearer", "").trim();
  
  if(!token) {
    return res.status(401)
    .send("Token nao encontrado"); 
  }

  try {
    const session = await db.collection("sessions").findOne({token}); 
    if(!session) {
        return res.status(401)
        .send("sessao nao encontrada");
    }

    const user = await db.collection("users").findOne({_id: session.userId});
    if(!user) {
        return res.status(401)
        .send("usuario nao encontrado");
    } 

    res.locals.user = user;
    next();
  } catch (error) {
    console.log("Erro ao tentar obter usuário através da sessão", error);
    return res.sendStatus(500);
  }

}