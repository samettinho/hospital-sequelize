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
      authorisationId: 4,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 5,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 6,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 7,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 8,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 9,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 10,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 11,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 12,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 13,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 14,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 15,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 16,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 17,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 18,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 19,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 20,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 21,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 11,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 12,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 13,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 14,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 15,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 16,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 17,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 14,
      roleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 15,
      roleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 16,
      roleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 17,
      roleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 22,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 23,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 24,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationId: 25,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AuthorisationRoles', null, {});
  }
};
