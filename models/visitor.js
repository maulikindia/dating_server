let mongoose = require('mongoose');
let visitorSchema = new mongoose.Schema({
    androidToken: {
        type: String
    }
})

module.exports = mongoose.model('visitor', visitorSchema)