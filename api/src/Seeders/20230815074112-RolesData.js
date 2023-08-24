'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Roles', [{
      rolName: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      rolName: 'doktor',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      rolName: 'hasta',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
