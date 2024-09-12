// Dummy train data
const dummyTrainData = [
  {
    trainId: '1176',
    route: 'Colombo to Polgahawela',
    currentLocation: 'Gampaha',
    lastUpdate: '07:33 PM',
    schedule: [
      { station: 'Colombo', arrival: '06:00 PM', departure: '06:15 PM' },
      { station: 'Gampaha', arrival: '06:55 PM', departure: '06:56 PM' },
    ],
  },
  {
    trainId: '8378',
    route: 'Panadura to Rambukkana',
    currentLocation: 'Dehiwala',
    lastUpdate: '07:49 PM',
    schedule: [
      { station: 'Panadura', arrival: '05:30 PM', departure: '05:40 PM' },
      { station: 'Dehiwala', arrival: '06:06 PM', departure: '06:07 PM' },
    ],
  },
];

// Get train details by ID
exports.getTrainById = (req, res) => {
  const { id } = req.params;
  const train = dummyTrainData.find(train => train.trainId === id);
  
  if (!train) {
    return res.status(404).json({ message: 'Train not found' });
  }
  
  res.json(train);
};
