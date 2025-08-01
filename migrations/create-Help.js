'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Help', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					isEmail: true,
				},
			},
			description: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			contactNo: {
				type: Sequelize.STRING,
				allowNull: false,
				validate: {
					isNumeric: true,  // Ensures that only numeric values are allowed
					len: [10, 15],    // Ensures that the contact number is between 10 to 15 digits
				},
			},
			status: {
				type: Sequelize.ENUM('Pending', 'Resolved'),
				defaultValue: 'Pending',
				allowNull: false,
			},
			resolutionDetails: {
				type: Sequelize.TEXT,
				allowNull: true, // Allows null if no resolution details are provided
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
			}
		});
	},

	down: async (queryInterface) => {
		await queryInterface.dropTable('Help');
	}
};
