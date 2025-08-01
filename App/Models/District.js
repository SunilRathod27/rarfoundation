'use strict';
const RAR = require('../../common/Foundation');

// Define the Sequelize model for 'District'
RAR.DistrictSchema = {
    name: {
        type: RAR.DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: RAR.DataTypes.STRING, // Change to the appropriate type if `state` is a foreign key
        allowNull: false
    },
};

// Define the Sequelize model
RAR.District = RAR.Sequelize.define('District', RAR.DistrictSchema, {
    tableName: 'District',  // Specifies the table name
    timestamps: false       // Disables automatic creation of createdAt and updatedAt fields
});

module.exports = RAR.District;
