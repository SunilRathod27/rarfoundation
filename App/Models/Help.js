'use strict';
const RAR = require('../../common/Foundation');

// Define the Sequelize model for 'Help'
RAR.HelpSchema = {
	id: {
		type: RAR.DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	name: {
		type: RAR.DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: RAR.DataTypes.STRING,
		allowNull: false,
		validate: {
			isEmail: true
		}
	},
	description: {
		type: RAR.DataTypes.TEXT,
		allowNull: false,
	},
	contactNo: {
		type: RAR.DataTypes.STRING,
		allowNull: false,
		validate: {
			isNumeric: true,  // Ensures that only numeric values are allowed
			len: [10, 15],    // Ensures that the contact number is between 10 to 15 digits
		},
	},
	status: {
		type: RAR.DataTypes.ENUM('Pending', 'Resolved'),
		defaultValue: 'Pending',
		allowNull: false,
	},
	resolutionDetails: {
		type: RAR.DataTypes.TEXT,
		allowNull: true, // Allows null if no resolution details are provided
	},
	createdAt: {
		type: RAR.DataTypes.DATE,
		defaultValue: RAR.DataTypes.NOW,
		allowNull: false,
	},
	updatedAt: {
		type: RAR.DataTypes.DATE,
		defaultValue: RAR.DataTypes.NOW,
		allowNull: false,
	}
};

// Define the Sequelize model
RAR.Help = RAR.Sequelize.define('Help', RAR.HelpSchema, {
	tableName: 'Help',  // Specifies the table name
	timestamps: true,   // Enables automatic creation of createdAt and updatedAt fields
});

module.exports = RAR.Help;
