require('dotenv').config();
module.exports = {
	development: {
		username: 'postgres',
		password: '1234',
		database: 'hospitalApp',
		host: 'localhost',
		port: 2855,
		dialect: 'postgresql',
		logging: false,
		dialectOptions: {

		},
		timezone: '+03:00'
	},
	test: {
		username: 'postgres',
		password: '1234',
		database: 'hospitalApp_test',
		host: 'localhost',
		port: 2855,
		dialect: 'postgres',
		logging: false,
		dialectOptions: {

		},

		timezone: '+03:00'
	},
	production: {
		username: 'postgres',
		password: '1234',
		database: 'hospitalApp',
		host: 'localhost',
		port: 2855,
		dialect: 'postgres',
	}
};
