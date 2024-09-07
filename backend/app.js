const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Import MongoDB connection function
const authRoutes = require('./routes/authRoutes'); // Import auth routes
const trainRoutes = require('./routes/trainRoutes'); // Import train routes

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(cors());

// API key generation route
app.use('/api/v1/auth', authRoutes);

// Train routes
app.use('/api/v1/trains', trainRoutes); // Register train routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
