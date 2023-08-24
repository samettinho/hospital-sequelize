'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsersRoles extends Model {

    static associate(models) {

    }
  }
  UsersRoles.init({
    userId: DataTypes.INTEGER,
    roleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsersRoles',
  });
  return UsersRoles;
};