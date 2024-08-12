'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      registrationId: {
        type: Sequelize.STRING,
        unique: true,
        defaultValue: ''
      },
      activationId: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fathername: {
        type: Sequelize.STRING,
        allowNull: false
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stateId: {
        type: Sequelize.STRING, // Changed from INTEGER to STRING
        allowNull: false
      },
      districtId: {
        type: Sequelize.STRING, // Changed from INTEGER to STRING
        allowNull: false
      },
      whatsapp: {
        type: Sequelize.STRING,
        allowNull: false
      },
      idProof: {
        type: Sequelize.STRING,
        allowNull: false
      },
      photo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bloodGroupId: {
        type: Sequelize.STRING, // Changed from INTEGER to STRING
        allowNull: false
      },
      designation: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'inactive',
        validate: {
          isIn: [['active', 'inactive']]
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('User');
  }
};
