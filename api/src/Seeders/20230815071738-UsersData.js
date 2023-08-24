'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      tc: '25256358547',
      name: 'Furkan',
      surName: 'Yılmaz',
      phone: '5486952631',
      email: 'furkan@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tc: '74859623585',
      name: 'Samet',
      surName: 'Yılmaz',
      phone: '5346010739',
      email: 'Samet@hotmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tc: '58623594685',
      name: 'Hakan',
      surName: 'Dincturk',
      phone: '5269856585',
      email: 'Hakan@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tc: '14585696758',
      name: 'ahmet',
      surName: 'keskin',
      phone: '5263258547',
      email: 'ahmetkeskin@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tc: '965232145629',
      name: 'burak',
      surName: 'demircioğlu',
      phone: '5486953225',
      email: 'demircioğlu@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tc: '85963268541',
      name: 'süleyman',
      surName: 'arzum',
      phone: '5485263252',
      email: 'süleyman@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
