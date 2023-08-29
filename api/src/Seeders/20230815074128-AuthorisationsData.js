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
      authorisationStatement: 'Doktor sil',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Doktor listele',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Doktor güncelle',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Hastane ekle',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Hastane sil',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Hastane listele',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Hastane güncelle',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Hasta ekle',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Hastane ekle',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Hasta listele',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Hasta güncelle',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Randevuları listele',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Randevu güncelle',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Randevu listele',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Randevu sil',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Randevu oluştur',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Yetki ekle',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Yetki listele',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Yetki sil',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Role ekle',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Role listele',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Role sil',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'Role Güncelle ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      authorisationStatement: 'yetki Güncelle',
      createdAt: new Date(),
      updatedAt: new Date()
    },], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Authorisations', null, {});
  }
};
