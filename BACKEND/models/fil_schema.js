const mongoose = require('mongoose');

const fil_schema = mongoose.Schema({
    _id: {type: Number, required: true},
    enterprise_id: {type: String, required: true},
    no_of_hours: {type: Number, required: true},
    date: {type: Date, required: true, default: Date.now}
});

module.exports = mongoose.model('fil_excel', fil_schema);