'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {

		static associate(models) {
			User.belongsToMany(models.Role, {
				through: 'UsersRoles',
				foreignKey: 'userId'
			});
			User.belongsToMany(models.Hospitals, {
				through: 'doctorHospitals',
				foreignKey: 'hospitalId'
			});
			User.hasMany(models.Appointments, {foreignKey: 'userId'});
			User.hasMany(models.Appointments, {foreignKey: 'doctor'});
		}
	
	}
	User.init({
		tc: DataTypes.STRING,
		name: DataTypes.STRING,
		surName: DataTypes.STRING,
		phone: DataTypes.STRING,
		email: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'User'
	});
	return User;
};