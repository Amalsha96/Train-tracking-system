const express = require('express');
const { addTrainLocation, getTrainLocations } = require('../controllers/trainController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, addTrainLocation);
router.get('/', authMiddleware, getTrainLocations);

module.exports = router;
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

/**
 * @swagger
 * /api/trains/{id}:
 *   get:
 *     summary: Get train by ID
 *     tags: [Trains]
 *     parameters:
 *       - in: path
 *         name: id
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

