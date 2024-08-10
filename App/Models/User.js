'use strict';
const RAR = require('../../common/Foundation');

// Define the Sequelize model for 'User'
RAR.UserSchema = {
    registrationId: {
        type: RAR.DataTypes.STRING,
        unique: true,
        defaultValue: ''
    },
    activationId: {
        type: RAR.DataTypes.STRING,
        unique: true,
        defaultValue: ''
    },
    name: {
        type: RAR.DataTypes.STRING,
        allowNull: false
    },
    fathername: {
        type: RAR.DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: RAR.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: RAR.DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    birthday: {
        type: RAR.DataTypes.DATE,
        allowNull: false
    },
    address: {
        type: RAR.DataTypes.STRING,
        allowNull: false
    },
    stateId: {  // Changed to STRING
        type: RAR.DataTypes.STRING,
        allowNull: false
    },
    districtId: {  // Changed to STRING
        type: RAR.DataTypes.STRING,
        allowNull: false
    },
    whatsapp: {
        type: RAR.DataTypes.STRING,
        allowNull: false
    },
    idProof: {
        type:RAR.DataTypes.STRING,
        allowNull: false
    },
    photo: {
        type: RAR.DataTypes.STRING,
        allowNull: false
    },
    bloodGroupId: {  // Changed to STRING
        type: RAR.DataTypes.STRING,
        allowNull: false
    },
    designation: {
        type: RAR.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: RAR.DataTypes.ENUM('active', 'inactive'),
        allowNull: false,
        defaultValue: 'inactive'
    },
    createdAt: {
        type: RAR.DataTypes.DATE,
        defaultValue: RAR.Sequelize.NOW
    },
    updatedAt: {
        type: RAR.DataTypes.DATE,
        defaultValue: RAR.Sequelize.NOW
    }
};

// Define the Sequelize model
RAR.User = RAR.Sequelize.define('User', RAR.UserSchema, {
    tableName: 'User',  // Specifies the table name
    timestamps: false    // Disables automatic creation of createdAt and updatedAt fields
});

module.exports = RAR.User;
