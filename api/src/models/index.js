import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import configJson from '../config/config';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const config = configJson[env];

console.log('this is the environment: ', env);

const db = {};

let sequelize;
if (config.environment === 'production') {

	sequelize = new Sequelize(process.env[config.use_env_variable], config);
	sequelize = new Sequelize(
		process.env.DB_NAME,
		process.env.DB_USER,
		process.env.DB_PASS,
		{
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			dialect: 'postgres',
			ssl: true,
			dialectOptions: {
				ssl: {
					require: true,
					rejectUnauthorized: false // <<<<<<< YOU NEED THIS
				}
			},
			logging: false
		}
	);

}
else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);

}

fs.readdirSync(__dirname)
	.filter(
		(file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
	)
	.forEach((file) => {

		const model = require(path.join(__dirname, file))(
			sequelize,
			Sequelize.DataTypes
		);
		db[model.name] = model;

	});

Object.keys(db).forEach((modelName) => {

	if (db[modelName].associate) {

		db[modelName].associate(db);

	}

});
// sequelize.sync({ force: false, alter: true })

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;