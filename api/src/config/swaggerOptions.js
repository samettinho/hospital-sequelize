let options = {
  swaggerDefinition: {
    info: {
      description: 'this is a server with basic API features',
      title: 'Hospital Appointment',
      version: '1.0.0'
    },
    host: 'localhost:3000',
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