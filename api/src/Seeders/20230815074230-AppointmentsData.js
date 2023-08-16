'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Appointments', [
      {
        userId: 4,
        doctor: 2,
        hospitalId: 2,
        entryDate: '2023-08-20 17:25:00',
        releaseDate: '2023-08-20 17:40:00'
      },
      {
        userId: 5,
        doctor: 2,
        hospitalId: 2,
        entryDate: '2023-08-20 17:45:00',
        releaseDate: '2023-08-20 18:00:00'
      },
      {
        userId: 5,
        doctor: 3,
        hospitalId: 1,
        entryDate: '2023-08-20 17:25:00',
        releaseDate: '2023-08-20 17:40:00'
      },
      {
        userId: 4,
        doctor: 3,
        hospitalId: 1,
        entryDate: '2023-08-20 17:45:00',
        releaseDate: '2023-08-20 18:00:00'
      }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
