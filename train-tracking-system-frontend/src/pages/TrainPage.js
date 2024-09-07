// src/pages/TrainPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get dynamic route params
import TrainDetails from '../components/TrainDetails';

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

const TrainPage = () => {
  const { trainId } = useParams(); // Get the trainId from the URL params
  const [train, setTrain] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    const fetchTrainDetails = () => {
      const trainDetails = dummyTrainData.find(train => train.trainId === trainId);
      if (trainDetails) {
        setTrain(trainDetails);
      } else {
        setError("Train not found");
      }
      setLoading(false);
    };

    fetchTrainDetails();
  }, [trainId]);

  return (
    <div className="container mx-auto mt-8">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        train && <TrainDetails train={train} />
      )}
    </div>
  );
};

export default TrainPage;
