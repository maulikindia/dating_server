let mongoose = require('mongoose');

let countrySchema = new mongoose.Schema({
    name: { type: String }

});

module.exports = mongoose.model('country', countrySchema)