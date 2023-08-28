import 'dotenv';
import express from 'express';
import session from 'express-session';
import SwaggerOptions from './api/src/config/swaggerOptions.js';
import publicRoutes from './api/Public/index.js';
import privateRoutes from './api/Private/index.js';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());

const expressSwagger = require('express-swagger-generator')(app);
expressSwagger(SwaggerOptions);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	session({
		secret: 'hospital_appointment',
		resave: true,
		saveUninitialized: true,
		cookie: {
			expires: 600000
		}
	})
);

app.use((req, res, next) => {
	req.headers.lang = req.headers.lang ? req.headers.lang : 'tr';
	next();
});

//app.use('/', Router);
app.use('/', publicRoutes);
app.use('/private', privateRoutes);

app.listen(3000, () => {
	console.log('server is open, port: ', 3000);
});

export default app;