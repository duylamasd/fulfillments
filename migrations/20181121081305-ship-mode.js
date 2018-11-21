'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ShipMode', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      field1: {
        type: Sequelize.STRING(254)
      },
      field2: {
        type: Sequelize.INTEGER
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      code: {
        type: Sequelize.CHAR(30)
      },
      carrier: {
        type: Sequelize.CHAR(30)
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
      await queryInterface.addIndex('ShipMode', {
        name: 'I0000228',
        unique: true,
        fields: ['storeEntId', 'code', 'carrier']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('ShipMode', 'I0000228').then(async () => {
      await queryInterface.dropTable('ShipMode');
    });
  }
};
