'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Hospitals extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Hospitals.belongsToMany(models.Languages, {
				through: 'HospitalLanguages',
				foreignKey: 'hospitalId'
			});
			Hospitals.belongsToMany(models.Users, {
				as: 'doctors',
				through: 'doctorHospitals',
				foreignKey: 'hospitalId'
			});
			Hospitals.hasMany(models.Appointments, { foreignKey: 'hospitalId' });
		}

	}
	Hospitals.init({
		hospitalName: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Hospitals'
	});
	return Hospitals;
};