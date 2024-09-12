const crypto = require('crypto');
const bcrypt = require('bcrypt');

const generateApiKey = () => {
  return crypto.randomBytes(30).toString('hex'); // Generates a 60-character API key
};

const hashApiKey = async (apiKey) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(apiKey, salt);
};

module.exports = { generateApiKey, hashApiKey };
