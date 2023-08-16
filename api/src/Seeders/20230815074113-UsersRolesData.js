'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UsersRoles', [{
      userId: 1,
      roleId: 1
    },
    {
      userId: 2,
      roleId: 2
    },
    {
      userId: 3,
      roleId: 2
    },
    {
      userId: 4,
      roleId: 3
    },
    {
      userId: 5,
      roleId: 3
    }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('UsersRoles', null, {});
     */
  }
};
