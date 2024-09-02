import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TrainLocation() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        };
        const response = await axios.get('http://localhost:5000/api/trains', config);
        setLocations(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching the train locations:', error);
        setError('Could not fetch train locations. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 bg-red-100 text-red-800">{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-end space-x-4">
        {isAuthenticated ? (
          <button onClick={logout} className="text-red-500">Logout</button>
        ) : (
          <>
            <Link to="/login" className="text-blue-500">Login</Link>
            <Link to="/register" className="text-blue-500">Register</Link>
          </>
        )}
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">Train Locations</h1>
      <ul className="space-y-4">
        {locations.map((train) => (
          <li key={train._id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">{train.route}</h2>
            <p>Train ID: {train.trainId}</p>
            <p>Last Update: {train.lastUpdate}</p>
            <ul className="mt-2">
              {train.schedule.map((station, index) => (
                <li key={index} className="flex justify-between text-sm sm:text-base">
                  <span>{station.station}</span>
                  <span>{station.arrival} - {station.departure}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainLocation;
