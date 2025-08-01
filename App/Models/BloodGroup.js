'use strict';
const RAR = require('../../common/Foundation');

RAR.BloodGroupSchema = {
    name: {
        type: RAR.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
};

// Define the Sequelize model
RAR.BloodGroup = RAR.Sequelize.define('BloodGroup', RAR.BloodGroupSchema, {
    tableName: 'BloodGroup', // Specifies the table name
    timestamps: false,       // Disables automatic creation of createdAt and updatedAt fields
});

module.exports = RAR.BloodGroup;
