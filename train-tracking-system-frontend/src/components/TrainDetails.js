import React from 'react';

const TrainDetails = ({ train }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto mt-10">
      <div className="border-b pb-4 mb-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">{train.route}</h3>
        <p className="text-gray-700">
          <strong>Last Update:</strong> {train.lastUpdate}
        </p>
        <p className="text-gray-700">
          <strong>Current Location:</strong> {train.currentLocation}
        </p>
      </div>
      <h4 className="text-2xl font-semibold text-gray-900 mb-4">Schedule:</h4>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
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
