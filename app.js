import express from 'express';

import SwaggerOptions from './api/src/config/swaggerOptions.js';
import Router from './api/Route/index.js';
import 'dotenv';
const app = express();

app.use(express.json());

const expressSwagger = require('express-swagger-generator')(app);
expressSwagger(SwaggerOptions);

app.use((req, res, next) => {
	req.headers.lang = req.headers.lang ? req.headers.lang : 'tr';
	next();
});

app.use('/', Router);

app.listen(3000, () => {
	console.log('server is open, port: ', 3000);
});

export default app;

