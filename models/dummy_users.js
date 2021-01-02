let mongoose = require('mongoose');
let dummyUserSchema = new mongoose.Schema({
    bio:
    {
        type: String
    },
    profile_pic:
    {
        type: String
    },
    more_pics: [{ type: String }],
    strickers: [{ type: String }],
    status: { type: Boolean, default: false },
    country:
    {
        type: String
    },
    name: { type: String },
    coins: { type: Number, defualt: 0 },
    likes: { type: Number, default: 0 }
})

module.exports = mongoose.model('dummyUser', dummyUserSchema)