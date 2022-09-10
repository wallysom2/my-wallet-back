require ('dotenv').config ()
const express  = require ('express')
const mongoose = require ('mongoose')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
const userRoute = require ("./app/routes/user.route")

const app = express ()
app.use (express.json())

app.get ('/', (req,res) => {
    res.status(200).json ({ msg : 'Bem vindo a nossa API' })
})

app.use ("/", userRoute);
// Register User

app.post ('/auth/register', async (req,res) => {
    const { name, email, password, confirmpassword} = req.body
    //validaçoes 
})


const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.cstmyax.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    app.listen(3000)
    console.log ('conectou ao banco!!')
}).catch((err)=> console.log (err))

