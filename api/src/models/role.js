'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Roles extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Roles.belongsToMany(models.Authorisation, {
				through: 'AuthorisationRoles',
				foreignKey: 'authorisationId'
			});
			Roles.belongsToMany(models.Users, {
				through: 'UsersRoles',
				foreignKey: 'roleId',
				otherKey: 'userId'
			});
		}

	}
	Roles.init({
		rolName: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Roles'
	});
	return Roles;
};