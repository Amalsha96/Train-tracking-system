const express = require('express');
const { addTrainLocation, getTrainLocations } = require('../controllers/trainController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Trains
 *   description: Train tracking routes
 */

/**
 * @swagger
 * /api/trains:
 *   get:
 *     summary: Get all trains
 *     tags: [Trains]
 *     responses:
 *       200:
 *         description: List of trains
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Train'
 *       500:
 *         description: Server error
 */
router.get('/', authMiddleware, getTrainLocations);

/**
 * @swagger
 * /api/trains:
 *   post:
 *     summary: Add a train location
 *     tags: [Trains]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Train'
 *     responses:
 *       201:
 *         description: Train location added
 *       500:
 *         description: Server error
 */
router.post('/', authMiddleware, addTrainLocation);

module.exports = router;
