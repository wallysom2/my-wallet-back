require ('dotenv').config ()
const express  = require ('express')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
const Joi = require('joi');

const connectDatabase = require ("./app/database/db")
const userRoute = require ("./app/routes/user.route")

const app = express ()
app.use (express.json())

connectDatabase()

app.use ("/", userRoute);

// Register User
app.post ('/signup', async (req,res) => {
    const {name, email, password, confirmPassword} = req.body
    //validaçoes joi
    const signUpSchema = Joi.object({
        name : Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().required(),
        confirmPassword: Joi.ref('password')
});
    const {error} = signUpSchema.validate(req.body);
    if (error) {
        return res.status(422).send(error.details.map(detail => detail.message));
    }


const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

app.listen(3000, () => console.log ("Servidor rodando na porta 3000"))

