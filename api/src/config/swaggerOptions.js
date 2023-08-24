require('dotenv').config();
const options = {
  swaggerDefinition: {
    info: {
      description: 'this is a server with basic API features',
      title: 'Hospital Appointment',
      version: '1.0.0'
    },
    host: process.env.DB_SWAGGER_URL,
    basePath: '',
    produces: ['application/json', 'application/xml'],
    schemas: ['http', 'https'],

    securityDefinition: {
      JWT: {
        type: 'apikey',
        in: 'header',
        name: 'Authorization',
        description: ''
      },
    },
  },

  basedir: __dirname,
  files: ['../../Controller/*.js']
}

export default options;