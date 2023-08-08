'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('hospitalLanguages', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			hospitalId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Hospitals',
					key: 'id'
				}
			},
			languageId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Languages',
					key: 'id'
				}
			},
			translate: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('hospitalLanguages');
	}
};