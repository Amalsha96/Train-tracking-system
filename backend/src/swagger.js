const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Train Tracking System API',
    version: '1.0.0',
    description: 'API documentation for Train Tracking System',
    contact: {
      name: 'Developer',
      email: 'developer@example.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Local server',
    },
  ],
  components: {
    schemas: {
      Train: {
        type: 'object',
        properties: {
          trainId: { type: 'string', example: '1176' },
          route: { type: 'string', example: 'Colombo to Polgahawela' },
          departureTime: { type: 'string', example: '06:15 PM' },
          arrivalTime: { type: 'string', example: '08:01 PM' },
          currentLocation: { type: 'string', example: 'Gampaha' },
          lastUpdate: { type: 'string', example: '07:33 PM' },
          schedule: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                station: { type: 'string', example: 'Colombo Fort' },
                arrival: { type: 'string', example: '06:00 PM' },
                departure: { type: 'string', example: '06:15 PM' },
              },
            },
          },
        },
      },
      User: {
        type: 'object',
        properties: {
          name: { type: 'string', example: 'John Doe' },
          email: { type: 'string', example: 'john.doe@example.com' },
          password: { type: 'string', example: 'securepassword123' },
        },
      },
      AuthResponse: {
        type: 'object',
        properties: {
          token: { type: 'string', example: 'your-jwt-token' },
        },
      },
    },
  },
};

// Swagger options
const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};


const swaggerSpec = swaggerJsDoc(options);

const swaggerSetup = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerSetup;
