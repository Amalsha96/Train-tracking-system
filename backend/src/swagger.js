const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
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
      // Define the Train schema
      Train: {
        type: 'object',
        properties: {
          trainId: {
            type: 'string',
            description: 'The ID of the train',
            example: '1176',
          },
          route: {
            type: 'string',
            description: 'The route of the train',
            example: 'Colombo to Polgahawela',
          },
          departureTime: {
            type: 'string',
            description: 'Departure time of the train',
            example: '06:15 PM',
          },
          arrivalTime: {
            type: 'string',
            description: 'Arrival time of the train',
            example: '08:01 PM',
          },
          currentLocation: {
            type: 'string',
            description: 'Current location of the train',
            example: 'Gampaha',
          },
          lastUpdate: {
            type: 'string',
            description: 'Last location update time',
            example: '07:33 PM',
          },
          schedule: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                station: {
                  type: 'string',
                  description: 'Name of the station',
                  example: 'Colombo Fort',
                },
                arrival: {
                  type: 'string',
                  description: 'Arrival time at the station',
                  example: '06:00 PM',
                },
                departure: {
                  type: 'string',
                  description: 'Departure time from the station',
                  example: '06:15 PM',
                },
              },
            },
            description: 'The schedule of the train, including all stops.',
          },
        },
      },
      // Define the User schema
      User: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'The name of the user',
            example: 'John Doe',
          },
          email: {
            type: 'string',
            description: 'The email of the user',
            example: 'john.doe@example.com',
          },
          password: {
            type: 'string',
            description: 'The user\'s password',
            example: 'strongpassword123',
          },
        },
      },
      // Define authentication token response
      AuthResponse: {
        type: 'object',
        properties: {
          token: {
            type: 'string',
            description: 'JWT token for authentication',
            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
          },
        },
      },
    },
  },
};

// Options for Swagger docs
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js', './models/*.js'], // Path to the API docs
};

// Initialize SwaggerJSDoc
const swaggerSpec = swaggerJsDoc(options);

// Function to setup Swagger
const swaggerSetup = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerSetup;
