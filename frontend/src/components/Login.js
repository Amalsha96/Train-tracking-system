import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to backend API
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      // Save the token in local storage
      localStorage.setItem('token', response.data.token);
      // Redirect to search page after login
      navigate('/search');
    } catch (err) {
      // Handle errors such as incorrect credentials
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-gradient-to-r from-green-100 to-green-200 rounded-xl shadow-lg space-y-6">
      <h2 className="text-4xl font-extrabold text-center text-green-900">Login</h2>
      
      {/* Display error message if login fails */}
      {error && (
        <div className="text-center text-red-500 p-2 bg-red-100 rounded">
          <p>🚫 {error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg text-gray-700 font-semibold">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block text-lg text-gray-700 font-semibold">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg text-lg font-semibold transition duration-300"
        >
          Login
        </button>
      </form>

      <div className="text-center">
        <p className="mt-6 text-gray-700 text-lg">
          Don't have an account?{' '}
          <Link to="/register" className="text-green-600 underline hover:text-green-700">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
