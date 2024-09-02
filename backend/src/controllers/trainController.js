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

exports.getTrainLocations = async (req, res) => {
    try {
        const locations = await Train.find();
        res.status(200).json(locations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
