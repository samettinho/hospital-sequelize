'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UsersRoles', [{
      userId: 1,
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 4,
      roleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 5,
      roleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('UsersRoles', null, {});

  }
};
