const express = require('express');
const { addTrainLocation, getTrainLocations } = require('../controllers/trainController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, addTrainLocation);
router.get('/', authMiddleware, getTrainLocations);

module.exports = router;
