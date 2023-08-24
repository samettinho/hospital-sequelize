'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Hospitals', [{
      hospitalName: 'Medicana',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      hospitalName: 'Medical Park',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      hospitalName: 'Acıbadem',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      hospitalName: 'Medipol',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Hospitals', null, {});

  }
};
