const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        "email": {type: String, unique: true, required: true},
        "name": {type: String, required: true},
        "password": {type: String, required: true},
        "contact": {type: String, required: true},
        "address": {type: String, required: true},
        "usertype": {type: String, required: true},
        "verified": {type: Boolean,default:false, required: true},
        "joinedAt": {type: Date, default: Date.now()}
    }
)

module.exports = mongoose.model('user', userSchema);