const { string } = require('joi')
const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema ({
    name:{
        type:string,
        require: true,
    },
    email:{
        type: string,
        require: true,
        unique: true
    },
    password:{
        type: string,
        require: true,
    }
})

const User = mongoose.Schema ("User", UserSchema);

module.exports = User