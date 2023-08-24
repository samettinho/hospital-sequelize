'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Authorisations', [{
      authorisationStatement: 'Doktor ekle',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Hastane ekle',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Hasta ekle',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authorisations', null, {});
  }
};
