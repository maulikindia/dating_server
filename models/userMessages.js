const mongosoe = require('mongoose');
const userMessageSchema = new mongosoe.Schema({
    msgType:
    {
        type: Number,
    },
    msgs: [{ type: String }]

}, { timestamps: true });

module.exports = mongosoe.model('user_message', userMessageSchema);