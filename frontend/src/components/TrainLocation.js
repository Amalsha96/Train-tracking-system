import React from 'react';
import { useParams } from 'react-router-dom';
import trainData from './mockTrainData'; // Assuming your train data is in this file

function TrainLocation() {
  const { trainId } = useParams(); // Get trainId from URL
  const train = trainData.find(t => t.trainId === trainId); // Find train by ID

  if (!train) {
    return (
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-4 text-center">
        <h2 className="text-3xl font-bold text-red-500">Train Location - {trainId}</h2>
        <p className="text-red-400 text-lg">🚫 Train not found</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl shadow-lg space-y-4">
      <h2 className="text-4xl font-extrabold text-blue-900 text-center">
        Train Location - {train.route}
      </h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-2xl text-gray-700 font-semibold">
          🚉 Current Location: <span className="font-bold">{train.currentLocation}</span>
        </p>
        <p className="text-xl text-gray-600">
          Last Update: <span className="text-gray-800 font-medium">{train.lastUpdate}</span>
        </p>
      </div>
      <h3 className="text-3xl font-bold text-blue-900">Schedule:</h3>
      <ul className="divide-y divide-blue-200">
        {train.schedule.map((stop, index) => (
          <li key={index} className="p-4 bg-white rounded-lg shadow-sm hover:bg-blue-50 transition-all duration-300">
            <div className="flex justify-between text-lg">
              <span className="text-blue-800 font-semibold">{stop.station}</span>
              <div className="text-gray-600">
                <span className="text-green-600">Arrival: {stop.arrival}</span> &nbsp;|&nbsp;
                <span className="text-red-600">Departure: {stop.departure}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainLocation;


