import React from 'react';

const TrainDetails = ({ train }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-2xl font-bold mb-2">{train.route}</h3>
      <p><strong>Current Location:</strong> {train.currentLocation}</p>
      <p><strong>Last Update:</strong> {train.lastUpdate}</p>
      <h4 className="text-xl mt-4">Schedule:</h4>
      <ul>
        {train.schedule.map((stop, index) => (
          <li key={index}>
            <strong>{stop.station}</strong>: Arrival at {stop.arrival}, Departure at {stop.departure}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainDetails;
