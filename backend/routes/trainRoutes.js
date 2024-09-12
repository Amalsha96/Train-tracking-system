const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');
const validateApiKey = require('../middlewares/apiKeyAuth');

// Add validateApiKey middleware to secure this route
router.get('/:id', validateApiKey, trainController.getTrainById);

module.exports = router;
