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
        }
    }],
})

module.exports = mongoose.model('purchaseConfig', purchaseConfigSchema)