'use strict';
const RAR = require('../../common/Foundation');

// Define the Sequelize model for 'Admin'
RAR.AdminSchema = {
	loginId: {
		type: RAR.DataTypes.STRING,
		unique: true,
		allowNull: false,  // 'required' in Mongoose becomes 'allowNull: false' in Sequelize
	},
	password: {
		type: RAR.DataTypes.STRING,
		allowNull: false,
	},
	username: {
		type: RAR.DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: RAR.DataTypes.STRING,
		unique: true,
		allowNull: false,
		validate: {
			isEmail: true,  // Matches the regex for a valid email in Mongoose
		},
	},
};

// Define the Sequelize model
RAR.Admin = RAR.Sequelize.define('Admin', RAR.AdminSchema, {
	tableName: 'Admin',  // Specifies the table name
	timestamps: false,   // Disables automatic creation of createdAt and updatedAt fields
});

module.exports = RAR.Admin;
