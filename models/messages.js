const mongosoe = require('mongoose');
const messageSchema = new mongosoe.Schema({
    msg:
    {
        status:
        {
            type: Boolean
        },
        name:  //message come from other user
        {
            type: String
        },
        profilePic:
        {
            type: String,
            default: null
        },
        msgText:
        {
            type: String,
            default: null
        },
        lastMsgText:
        {
            type: String,
            default: null
        },
        morePics: [{ type: String }],
        stickers: [{ type: String }],
        coins: { type: Number, default: 0 },
        allMessages: { type: Array }
    }
}, { timestamps: true });

module.exports = mongosoe.model('message', messageSchema);