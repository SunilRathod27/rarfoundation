'use strict';
const RAR = require('../../common/Foundation');

RAR.CauseSchema = {
    title: {
        type: RAR.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    link: {
        type: RAR.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    image: {
        type: RAR.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: RAR.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

};

// Define the Sequelize model
RAR.Cause = RAR.Sequelize.define('Cause', RAR.CauseSchema, {
    tableName: 'Cause', // Specifies the table name
    timestamps: false,       // Disables automatic creation of createdAt and updatedAt fields
});

module.exports = RAR.Cause;
