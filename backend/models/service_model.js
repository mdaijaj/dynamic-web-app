const mongoose = require('../database/db');
const Schema = mongoose.Schema;

var serviceSchema = new Schema({
    title: {
        type: String, 
    },
    description: {
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


const serviceModel = mongoose.model('service', serviceSchema);
module.exports = serviceModel;