'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Authorisations', [{
      authorisationStatement: 'Doktor ekle'
    },
    {
      authorisationStatement: 'Hastane ekle'
    },
    {
      authorisationStatement: 'Hasta ekle'
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authorisations', null, {});
  }
};
