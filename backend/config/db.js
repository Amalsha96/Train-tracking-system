const mongoose = require('mongoose');
require('dotenv').config(); // To access environment variables from .env file

const connectDB = async () => {
  console.log('Attempting to connect to MongoDB...');
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  }
};

module.exports = connectDB;

