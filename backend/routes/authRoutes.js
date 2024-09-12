const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST request to generate an API key
router.post('/generate-api-key', authController.createApiKey);

module.exports = router;
