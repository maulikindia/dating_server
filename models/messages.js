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
        morePics: [{
            img:
            {
                type: String
            },
            isLock:
            {
                type: Boolean
            }
        }],
        stickers: [{ type: String }],
        coins: { type: Number, default: 0 },
        allMessages: { type: Array },
        bio:
        {
            type: String,
            default: ''
        },
        videoUrl:
        {
            type: String,
            default: ''
        },

    }
}, { timestamps: true });

module.exports = mongosoe.model('message', messageSchema);