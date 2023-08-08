'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class hospitalLanguages extends Model {

		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	
	}
	hospitalLanguages.init({
		hospitalId: DataTypes.INTEGER,
		languageId: DataTypes.INTEGER,
		translate: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'hospitalLanguages'
	});
	return hospitalLanguages;
};