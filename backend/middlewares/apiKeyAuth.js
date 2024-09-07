const Organization = require('../models/organization');
const bcrypt = require('bcrypt');

const validateApiKey = async (req, res, next) => {
  const apiKey = req.header('X-API-Key');
  
  if (!apiKey) {
    return res.status(401).json({ message: 'API key is missing' });
  }

  const organization = await Organization.findOne();

  if (!organization) {
    return res.status(403).json({ message: 'Invalid API key' });
  }

  const isValidKey = await bcrypt.compare(apiKey, organization.apiKey);
  if (!isValidKey) {
    return res.status(403).json({ message: 'Invalid API key' });
  }

  req.organization = organization;
  next();
};

module.exports = validateApiKey;
