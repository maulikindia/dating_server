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
    },
    isLocked:
    {
        type: Boolean
    },
    amount:
    {
        type: mongoose.Schema.Types.Mixed
    },
    messages:
    {
        type: Array
    },
    visitCount:
    {
        type: Number,
        default: 0
    },
    loginType:
    {
        type: Number,
        enum: [0, 1, 2],  //0 = normal login ,1= fb login ,2=gmail login
        default: 0
    }

})

module.exports = mongoose.model('user', usersSchema)