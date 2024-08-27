'use strict';
const RAR = require('../../common/Foundation');

// Define the Sequelize model for 'Otp'
RAR.OtpSchema = {
	adminId: {
		type: RAR.DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: 'Admin', // This references the 'Admin' model
			key: 'id',
		},
		onDelete: 'CASCADE', // If an admin is deleted, the associated OTP should also be deleted
	},
	otp: {
		type: RAR.DataTypes.STRING,
		allowNull: false,
	},
	expiresAt: {
		type: RAR.DataTypes.DATE,
		allowNull: false,
	},
};

// Define the Sequelize model
RAR.Otp = RAR.Sequelize.define('Otp', RAR.OtpSchema, {
	tableName: 'Otp', // Specifies the table name
	timestamps: false, // Disables automatic creation of createdAt and updatedAt fields
});

module.exports = RAR.Otp;
