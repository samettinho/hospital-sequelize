'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Hospitals', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			hospitalName: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: true,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: true,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Hospitals');
	}
};