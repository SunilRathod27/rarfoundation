'use strict';
const RAR = require('../../common/Foundation');

// Define the Sequelize model for 'SubDistrict'
RAR.SubDistrictSchema = {
	name: {
		type: RAR.DataTypes.STRING,
		allowNull: false
	},
	district: {
		type: RAR.DataTypes.STRING,  // Using district as a plain string instead of a foreign key
		allowNull: false
	},
};

// Define the Sequelize model
RAR.SubDistrict = RAR.Sequelize.define('SubDistrict', RAR.SubDistrictSchema, {
	tableName: 'SubDistrict',  // Specifies the table name
	timestamps: false          // Disables automatic creation of createdAt and updatedAt fields
});

module.exports = RAR.SubDistrict;
