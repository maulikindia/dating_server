let mongoose = require('mongoose');
let purchaseConfigSchema = new mongoose.Schema({
    morePicsConfiguration: [{
        time:
        {
            type: String
        },
        coin:
        {
            type: String
        },
        money:
        {
            type: mongoose.Schema.Types.Mixed
        },
        googleKey:
        {
            type: String
        }
    }],

    messageConfiguration: [{
        time:
        {
            type: String
        },
        coin:
        {
            type: String
        },
        money:
        {
            type: mongoose.Schema.Types.Mixed
        },
        googleKey:
        {
            type: String
        }
    }],

    settingConfiguration: [{
        time:
        {
            type: String
        },
        coin:
        {
            type: String
        },
        money:
        {
            type: mongoose.Schema.Types.Mixed
        },
        googleKey:
        {
            type: String
        }
    }],
})

module.exports = mongoose.model('purchaseConfig', purchaseConfigSchema)