'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Appointments extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	
	}
	Appointments.init({
		userId: DataTypes.INTEGER,
		doctor: DataTypes.INTEGER,
		hospitalId: DataTypes.INTEGER,
		entryDate: DataTypes.DATE,
		releaseDate: DataTypes.DATE
	}, {
		sequelize,
		modelName: 'Appointments'
	});
	return Appointments;
};