'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Otp', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			adminId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Admin',
					key: 'id',
				},
				onDelete: 'CASCADE',
			},
			otp: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			expiresAt: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Otp');
	},
};
