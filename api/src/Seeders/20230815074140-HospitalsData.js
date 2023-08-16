'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Hospitals', [{
      hospitalName: 'Medicana'
    },
    {
      hospitalName: 'Medical Park'
    },
    {
      hospitalName: 'Acıbadem'
    },
    {
      hospitalName: 'Medipol'
    }], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Hospitals', null, {});

  }
};
