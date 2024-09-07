const Train = require('../models/trainModel');

exports.addTrainLocation = async (req, res) => {
    const { trainId, location } = req.body;
    try {
        const newLocation = new Train({ trainId, location });
        await newLocation.save();
        res.status(201).json(newLocation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get train locations by trainId
exports.getTrainLocations = async (req, res) => {
    const { trainId } = req.params;
    
    try {
        const train = await Train.findOne({ trainId });

        if (!train) {
            return res.status(404).json({ message: 'Train not found' });
        }

        res.status(200).json(train);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
