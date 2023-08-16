'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AuthorisationRoles', [{
      authorisationId: 1,
      roleId: 1
    },
    {
      authorisationId: 2,
      roleId: 1
    },
    {
      authorisationId: 3,
      roleId: 1
    },
    {
      authorisationId: 3,
      roleId: 2
    }], {});
  },

  async down(queryInterface, Sequelize) {

  }
};
