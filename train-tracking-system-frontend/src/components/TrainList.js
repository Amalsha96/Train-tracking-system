// src/components/TrainList.js
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
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl mb-4">Available Trains</h2>
      <ul>
        {dummyTrainData.map((train) => (
          <li key={train.trainId}>
            <Link to={`/train/${train.trainId}`} className="text-blue-500">
              {train.route}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
