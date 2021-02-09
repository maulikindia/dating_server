let mongoose = require('mongoose');
let visitorSchema = new mongoose.Schema({
    androidToken: {
        type: String
    },
    messages: { type: Array },
    coins:
    {
        type: Number,
        default: 0
    },
    imgUrl:
    {
        type: String,
        default: null
    },
    amount:
    {
        type: Number,
        default: 0
    },
    visitCount:
    {
        type: Number,
        default: 0
    }

})

module.exports = mongoose.model('visitor', visitorSchema)