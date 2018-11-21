'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transport', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      implemented: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      addressable: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      code: {
        type: Sequelize.STRING(2)
      },
      name: {
        type: Sequelize.STRING(254),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(254)
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }).then(async () => {
      await queryInterface.addIndex('Transport', {
        name: 'I0000256',
        unique: true,
        fields: ['name']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Transport', 'I0000256').then(async () => {
      await queryInterface.dropTable('Transport');
    });
  }
};
