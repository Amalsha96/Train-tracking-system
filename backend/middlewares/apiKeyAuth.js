const Organization = require('../models/organization');
const bcrypt = require('bcrypt');

const validateApiKey = async (req, res, next) => {
  const apiKey = req.header('X-API-Key'); // or 'x-api-key'

  if (!apiKey) {
    return res.status(401).json({ message: 'API key is missing' });
  }

  try {
    // Find all organizations, then verify the API key with bcrypt for each one
    const organizations = await Organization.find();

    let validOrganization = null;

    for (const organization of organizations) {
      const isValidKey = await bcrypt.compare(apiKey, organization.apiKey);
      if (isValidKey) {
        validOrganization = organization;
        break;
      }
    }

    if (!validOrganization) {
      return res.status(403).json({ message: 'Invalid API key' });
    }

    // Attach the organization to the request for later use
    req.organization = validOrganization;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Error validating API key', error });
  }
};

module.exports = validateApiKey;
