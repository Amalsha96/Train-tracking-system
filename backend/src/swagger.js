const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger options and definition
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Train Tracking System API',
      version: '1.0.0',
      description: 'API documentation for Train Tracking System',
    },
    servers: [
      {
        url: 'http://localhost:5000', // Server URL
        description: 'Local server',
      },
    ],
    components: {
      schemas: {
        Train: {
          type: 'object',
          properties: {
            trainId: {
              type: 'string',
              description: 'Unique identifier for the train',
            },
            route: {
              type: 'string',
              description: 'The route name',
            },
            departureTime: {
              type: 'string',
              description: 'Scheduled departure time of the train',
            },
            arrivalTime: {
              type: 'string',
              description: 'Scheduled arrival time of the train',
            },
            currentLocation: {
              type: 'string',
              description: 'Current location of the train',
            },
            lastUpdate: {
              type: 'string',
              description: 'Timestamp for the last update of the location',
            },
            schedule: {
              type: 'array',
              description: 'Train schedule with arrival and departure times',
              items: {
                type: 'object',
                properties: {
                  station: {
                    type: 'string',
                    description: 'The station name',
                  },
                  arrival: {
                    type: 'string',
                    description: 'Arrival time at the station',
                  },
                  departure: {
                    type: 'string',
                    description: 'Departure time from the station',
                  },
                },
              },
            },
          },
          required: ['trainId', 'route', 'departureTime', 'arrivalTime'],
        },
      },
    },
  },
  apis: ['./src/routes/*.js'], // Path to your API route files
};

// Initialize swagger-jsdoc
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Swagger setup function to be used in index.js
const swaggerSetup = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = swaggerSetup;
