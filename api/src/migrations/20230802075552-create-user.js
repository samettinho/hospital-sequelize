'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			tc: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			surName: {
				type: Sequelize.STRING,
				allowNull: false
			},
			phone: {
				type: Sequelize.STRING,
				allowNull: false
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false
			},
			createdAt: {
				type: Sequelize.DATE
			},
			updatedAt: {
				type: Sequelize.DATE
			}
		});

	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Users');
	}
};