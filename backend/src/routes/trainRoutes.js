const express = require('express');
const { addTrainLocation, getTrainLocations } = require('../controllers/trainController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * /api/trains/{trainId}:
 *   get:
 *     summary: Get train by trainId
 *     tags: [Trains]
 *     parameters:
 *       - in: path
 *         name: trainId
 *         schema:
 *           type: string
 *         required: true
 *         description: Train ID
 *     responses:
 *       200:
 *         description: Train details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Train'
 *       404:
 *         description: Train not found
 *       500:
 *         description: Server error
 */
router.get('/:trainId', authMiddleware, getTrainLocations);

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
