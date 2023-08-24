'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('doctorHospitals', [{
      doctorId: 3,
      hospitalId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      doctorId: 2,
      hospitalId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('doctorHospitals', null, {});

  }
};
