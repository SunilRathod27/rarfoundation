'use strict';
const RAR = require('../../common/Foundation');

RAR.DesignationSchema = {
    name: {
        type: RAR.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    value: {
        type: RAR.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
};

// Define the Sequelize model
RAR.Designation = RAR.Sequelize.define('Designation', RAR.DesignationSchema, {
    tableName: 'Designation', // Specifies the table name
    timestamps: false,        // Disables automatic creation of createdAt and updatedAt fields
});

module.exports = RAR.Designation;
