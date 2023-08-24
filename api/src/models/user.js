'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {

		static associate(models) {
			Users.belongsToMany(models.Roles, {
				through: 'UsersRoles',
				foreignKey: 'userId',
				otherKey: 'roleId'
			});
			Users.belongsToMany(models.Hospitals, {
				through: 'doctorHospitals',
				foreignKey: 'doctorId'
			});
			Users.hasMany(models.Appointments, { as: 'Users', foreignKey: 'userId' });
			Users.hasMany(models.Appointments, { as: 'appDoctor', foreignKey: 'doctor' });
			Users.hasMany(models.UsersRoles, { foreignKey: 'userId' });
		}

	}
	Users.init({
		tc: DataTypes.STRING,
		name: DataTypes.STRING,
		surName: DataTypes.STRING,
		phone: DataTypes.STRING,
		email: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Users'
	});
	return Users;
};