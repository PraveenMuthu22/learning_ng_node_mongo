const mongoose = require('mongoose');

const School = mongoose.model('School', new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    studentCount: { type: Number, required: true },
}));

module.exports = School;
