const Organization = require('../models/organization');
const { generateApiKey, hashApiKey } = require('../utils/apiKeyGenerator');

exports.createApiKey = async (req, res) => {
  try {
    const apiKey = generateApiKey();
    const hashedApiKey = await hashApiKey(apiKey);
    
    const newOrganization = new Organization({
      name: req.body.name,
      apiKey: hashedApiKey,
    });

    await newOrganization.save();
    
    res.status(201).json({ apiKey });
  } catch (error) {
    res.status(500).json({ message: 'Error creating API key', error });
  }
};
