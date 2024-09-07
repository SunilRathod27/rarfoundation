'use strict';
const RAR = require('../../common/Foundation');

// Define the Sequelize model for 'Inquiries'
RAR.InquiriesSchema = {
	id: {
		type: RAR.DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	member_id: {
		type: RAR.DataTypes.STRING,
		allowNull: true, // Allows null if no member ID is provided
	},
	full_name: {
		type: RAR.DataTypes.STRING,
		allowNull: false, // Requires a full name
	},
	inquiry_type: {
		type: RAR.DataTypes.STRING,
		defaultValue: 'CardInquiry',
		allowNull: true, // Allows null if no inquiry type is provided
	},
	message: {
		type: RAR.DataTypes.TEXT,
		allowNull: false,
	},
	status: {
		type: RAR.DataTypes.ENUM('Pending', 'Resolved', 'Closed'),
		defaultValue: 'Pending',
		allowNull: false,
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
RAR.Inquiries = RAR.Sequelize.define('Inquiries', RAR.InquiriesSchema, {
	tableName: 'Inquiries',
	timestamps: true,
});

module.exports = RAR.Inquiries;
