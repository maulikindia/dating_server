let mongoose = require('mongoose');
let visitorSchema = new mongoose.Schema({
    androidToken: {
        type: String
    },
    messages: { type: Array }
})

module.exports = mongoose.model('visitor', visitorSchema)