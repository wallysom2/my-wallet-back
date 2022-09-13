const mongoose = require ('mongoose')

const connectDatabase = () => {
    console.log ("Wait connet to the database")

    const dbUser = process.env.DB_USER
    const dbPass = process.env.DB_PASS

    mongoose.connect (`mongodb+srv://${dbUser}:${dbPass}@cluster0.cstmyax.mongodb.net/?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("MongoDB Atlas Connect"))
    .catch((error) => console.log ("Error connecting to database", error) )
}

module.exports = connectDatabase