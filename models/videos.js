
let mongoose = require('mongoose');

let videoSchema = new mongoose.Schema({
    bio:
    {
        type: String
    },
    profile_name:
    {
        type: String
    },
    profile_pic:
    {
        type: String
    },
    video_url:
    {
        type: String
    }
});

module.exports = mongoose.model('video', videoSchema)