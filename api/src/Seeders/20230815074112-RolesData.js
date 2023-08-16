'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Roles', [{
      rolName: 'admin'
    },
    {
      rolName: 'doktor'
    },
    {
      rolName: 'hasta'
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
