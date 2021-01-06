let mongoose = require('mongoose');
let usersSchema = new mongoose.Schema({
    name:
    {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    auth_token: {
        type: String,
        default: null
    },
    user_id:
    {
        type: String,
        default: null
    },
    coins:
    {
        type: Number, defualt: 0
    },
    password: {
        type: String
    },
    img_url:
    {
        type: String,
        defualt: null
    },
    androidToken:
    {
        type: String,
        default: null
    }

})

module.exports = mongoose.model('user', usersSchema)