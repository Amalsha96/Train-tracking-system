import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function TrainLocation() {
  const { trainId } = useParams(); // Get trainId from URL
  const [train, setTrain] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/trains/${trainId}`);
        setTrain(response.data);
      } catch (err) {
        setError('Train not found');
      }
    };

    fetchTrainData();
  }, [trainId]);

  if (error) {
    return (
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Train Location - {trainId}</h2>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    );
  }

  if (!train) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">Train Location - {train.route}</h2>
      <p><span role="img" aria-label="train">🚆</span> Current Location: {train.currentLocation}</p>
      <p>Last Update: {train.lastUpdate}</p>
      <h3 className="text-xl font-semibold">Schedule:</h3>
      <ul>
        {train.schedule.map((stop, index) => (
          <li key={index}>
            {stop.station}: Arrival - {stop.arrival}, Departure - {stop.departure}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainLocation;
