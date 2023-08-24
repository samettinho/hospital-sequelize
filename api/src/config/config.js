require('dotenv').config();
module.exports = {
	development: {
		username: process.env.DB_USERNAME, //bu bilgilerin hepsi envden geleceek
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: 'postgres',
		logging: false,
		timezone: '+03:00'
	},
	test: {
		username: process.env.DB_USERNAME, //bu bilgilerin hepsi envden geleceek
		password: process.env.DB_PASSWORD,
		database: process.env.DB_TEST_NAME,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: 'postgres',
		logging: false,
		timezone: '+03:00'
	},
	production: {
		username: process.env.DB_USERNAME, //bu bilgilerin hepsi envden geleceek
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: 'postgres',
	}
};
