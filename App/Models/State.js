'use strict';
const RAR = require('../../common/Foundation');

// Define the Sequelize model for 'State'
RAR.StateSchema = {
    name: {
        type: RAR.DataTypes.STRING,
        allowNull: false,  // Equivalent to `required: true` in Mongoose
        unique: true
    },
    status: {
        type: RAR.DataTypes.ENUM('active', 'inactive'),  // Enum for allowed values
        allowNull: false,
        defaultValue: 'active'  // Default value for status
    }
};

// Define the Sequelize model
RAR.State = RAR.Sequelize.define('State', RAR.StateSchema, {
    tableName: 'State',  // Specifies the table name
    timestamps: false    // Disables automatic creation of createdAt and updatedAt fields
});

module.exports = RAR.State;
