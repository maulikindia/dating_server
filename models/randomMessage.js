const mongosoe = require('mongoose');
const randomMessageSchema = new mongosoe.Schema({
    msgText: { type: String }
}, { timestamps: true });

module.exports = mongosoe.model('randomMessage', randomMessageSchema);