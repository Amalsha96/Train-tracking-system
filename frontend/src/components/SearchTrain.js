import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchTrain() {
  const [trainId, setTrainId] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (trainId) {
      navigate(`/train-location/${trainId}`); // Redirect to the train location page with the trainId
    } else {
      alert('Please enter a train ID');
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl shadow-lg space-y-6">
      <h2 className="text-4xl font-extrabold text-center text-blue-900">Search Train</h2>
      
      <form onSubmit={handleSearch} className="space-y-6">
        <div>
          <label className="block text-lg text-gray-700 font-semibold">Train ID:</label>
          <input
            type="text"
            value={trainId}
            onChange={(e) => setTrainId(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Train ID"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg text-lg font-semibold transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchTrain;
