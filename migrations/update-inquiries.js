'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		// Add email and whatsapp_no columns to the 'Inquiries' table
		await queryInterface.addColumn('Inquiries', 'email', {
			type: Sequelize.STRING,
			allowNull: false, // Allows null if no email is provided
		});

		await queryInterface.addColumn('Inquiries', 'whatsapp', {
			type: Sequelize.STRING,
			allowNull: false, // Allows null if no WhatsApp number is provided

		});
	},

	down: async (queryInterface) => {
		// Remove the email and whatsapp_no columns from the 'Inquiries' table
		await queryInterface.removeColumn('Inquiries', 'email');
		await queryInterface.removeColumn('Inquiries', 'whatsapp');
	}
};
