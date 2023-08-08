require('dotenv').config();
module.exports = {
	development: {
		username: 'postgres',
		password: '1234',
		database: 'hospitalApp',
		host: 'localhost',
		port: 2855,
		dialect: 'postgres'
	},
	test: {
		username: 'postgres',
		password: '1234',
		database: 'hospitalApp',
		host: 'localhost',
		port: 2855,
		dialect: 'postgres'
	},
	production: {
		username: 'postgres',
		password: '1234',
		database: 'hospitalApp',
		host: 'localhost',
		port: 2855,
		dialect: 'postgres'
	}
};