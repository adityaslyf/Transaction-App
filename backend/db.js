const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/transaction-app", )

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,

})  

const User = mongoose.model('User', userSchema)

module.exports ={
    User
}