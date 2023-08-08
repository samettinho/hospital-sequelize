'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class AuthorisationRoles extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	
	}
	AuthorisationRoles.init({
		authorisationId: DataTypes.INTEGER,
		roleId: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'AuthorisationRoles'
	});
	return AuthorisationRoles;
};