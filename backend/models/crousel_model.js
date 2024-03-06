const mongoose = require('../database/db');
const Schema = mongoose.Schema;

var offerSchema = new Schema({
    title: {
        type: String, 
    },
    description: {
        type: String,
    },
    logo: {
        type: String,
    },
    service_type: {
        type: String,
    },
    status: {
        type: Boolean,
        default: true 
    },
}, 
{
    timestamps: true
});


const offerModel = mongoose.model('crousel', offerSchema);
module.exports = offerModel;