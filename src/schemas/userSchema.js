const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    username: String,
    password: String,
    token: String,
    isAdmin: Boolean
})

module.exports = model('User', userSchema)