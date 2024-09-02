const express = require('express');
const { addTrainLocation, getTrainLocations } = require('../controllers/trainController');
const router = express.Router();

router.post('/', addTrainLocation);
router.get('/', getTrainLocations);

module.exports = router;
