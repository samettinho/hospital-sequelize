'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AuthorisationRoles', [{
      authorisationId: 1,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 2,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 3,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 3,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AuthorisationRoles', null, {});
  }
};
