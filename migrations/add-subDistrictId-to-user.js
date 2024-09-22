'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn('User', 'subDistrictId', {
			type: Sequelize.STRING, // Specify the type according to your needs
			allowNull: false,       // Set to false if this column should not allow NULL values
		});
	},

	down: async (queryInterface) => {
		await queryInterface.removeColumn('User', 'subDistrictId');
	}
};
