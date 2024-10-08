const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  apiKey: { type: String, required: true },
});

module.exports = mongoose.model('Organization', organizationSchema);
