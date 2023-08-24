'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Authorisation extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Authorisation.belongsToMany(models.Roles, {
				through: 'AuthorisationRoles',
				foreignKey: 'roleId'
			});
		}

	}
	Authorisation.init({
		authorisationStatement: DataTypes.STRING,
		isRemoved: DataTypes.BOOLEAN
	}, {
		sequelize,
		modelName: 'Authorisation'
	});
	return Authorisation;
};
