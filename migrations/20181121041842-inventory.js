'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Inventory', {
      catEntryId: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      quantity: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0
      },
      ffmCenterId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      storeId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      quantityMeasure: {
        type: Sequelize.STRING(16),
        allowNull: false,
        defaultValue: 'C62'
      },
      inventoryFlags: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
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
      await queryInterface.addIndex('Inventory', {
        name: 'I0000594',
        fields: ['ffmCenterId']
      });
      await queryInterface.addIndex('Inventory', {
        name: 'I0000595',
        fields: ['storeId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Inventory', 'I0000594').then(async () => {
      await queryInterface.removeIndex('Inventory', 'I0000595');
      await queryInterface.dropTable('Inventory');
    });
  }
};
