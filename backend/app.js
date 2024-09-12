const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Reference to swagger.json
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const trainRoutes = require('./routes/trainRoutes');

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(cors());

// API key generation route
app.use('/api/v1/auth', authRoutes);

// Train routes
app.use('/api/v1/trains', trainRoutes);

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Serve Swagger UI

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
