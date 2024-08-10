'use strict';
const RAR = require('../../common/Foundation');

// Define the Sequelize model for 'Slides'
RAR.SlidesSchema = {
    image: {
        type: RAR.DataTypes.STRING,
        allowNull: false // Equivalent to `required: true` in Mongoose
    },
    title: {
        type: RAR.DataTypes.STRING,
        defaultValue: '' // Equivalent to `default: ''` in Mongoose
    },
    subtitle: {
        type: RAR.DataTypes.STRING,
        defaultValue: ''
    },
    content: {
        type: RAR.DataTypes.STRING,
        defaultValue: ''
    }
};

// Define the Sequelize model
RAR.Slides = RAR.Sequelize.define('Slides', RAR.SlidesSchema, {
    tableName: 'Slides',  // Specifies the table name
    timestamps: false     // Disables automatic creation of createdAt and updatedAt fields
});

module.exports = RAR.Slides;
