const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let crs = new Schema({
    crs_co_name: {
        type: String
    },
    crs_co_email: {
        type: String
    },
    crs_co_address: {
        type: String
    },
    crs_co_phone: {
        type: String
    },
    crs_co_website: {
        type: String
    },
    crs_co_pass: {
        type: String
    },
    crs_co_blocked: {
        type: Boolean
    },

    crs_st_name: {
        type: String
    },
    crs_st_education: {
        type: String
    },
    crs_st_percent: {
        type: Number
    },
    crs_st_email: {
        type: String
    },
    crs_st_pass: {
        type: String
    },
    crs_st_phone: {
        type: String
    },
    crs_st_blocked: {
        type: Boolean
    }

});

module.exports = mongoose.model('crs', crs);
