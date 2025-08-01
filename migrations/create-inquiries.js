'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Inquiries', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			member_id: {
				type: Sequelize.STRING,
				allowNull: true, // Allows null if no member ID is provided
			},
			full_name: {
				type: Sequelize.STRING,
				allowNull: false, // Requires a full name
			},
			email: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false,
				validate: {
					isEmail: true
				}
			},
			whatsapp: {
				type: Sequelize.STRING,
				allowNull: false
			},
			inquiry_type: {
				type: Sequelize.STRING,
				defaultValue: 'CardInquiry',
				allowNull: true, // Allows null if no inquiry type is provided
			},
			message: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			status: {
				type: Sequelize.ENUM('Pending', 'Resolved', 'Closed'),
				defaultValue: 'Pending',
				allowNull: false,
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
		await queryInterface.dropTable('Inquiries');
	}
};
