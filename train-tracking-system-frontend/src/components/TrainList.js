import React from 'react';
import { Link } from 'react-router-dom';

const TrainList = () => {
  const dummyTrainData = [
    {
      trainId: '1176',
      route: 'Colombo to Polgahawela',
    },
    {
      trainId: '8378',
      route: 'Panadura to Rambukkana',
    },
  ];

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Available Trains</h2>
      <ul className="space-y-4">
        {dummyTrainData.map((train) => (
          <li key={train.trainId} className="border-b border-gray-300 pb-4">
            <Link
              to={`/train/${train.trainId}`}
              className="text-xl text-blue-600 hover:text-blue-800 font-semibold hover:underline transition"
            >
              {train.route}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
