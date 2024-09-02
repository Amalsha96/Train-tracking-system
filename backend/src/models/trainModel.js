const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
    trainId: { type: String, required: true },
    location: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Train', trainSchema);
