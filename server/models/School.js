const mongoose = require('mongoose');

const School = mongoose.model('School', new mongoose.Schema({
    name: { type: String, required: true },
    address: {
        street: { type: String, required: true },
        suburb: { type: String, required: true },
        postcode: { type: String, required: true },
        state: { type: String, required: true },
    },
    studentCount: { type: Number, required: true },
}));

module.exports = School;
