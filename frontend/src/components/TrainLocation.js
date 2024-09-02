import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrainLocation() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/trains');
        setLocations(response.data);
      } catch (error) {
        console.error('Error fetching the train locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Train Locations</h1>
      <ul className="space-y-4">
        {locations.map((location) => (
          <li
            key={location._id}
            className="bg-white p-4 rounded shadow-md flex justify-between items-center"
          >
            <span className="font-medium">Train ID: {location.trainId}</span>
            <span>Location: {location.location}</span>
            <span>Timestamp: {new Date(location.timestamp).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainLocation;
