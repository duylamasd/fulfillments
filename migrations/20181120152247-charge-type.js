'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ChargeType', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      displayAggregated: {
        type: Sequelize.CHAR(1),
        allowNull: false
      },
      code: {
        type: Sequelize.CHAR(10),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }).then(() => {
      return queryInterface.addIndex('ChargeType', {
        name: 'I0000071',
        unique: true,
        fields: ['storeEntId', 'code']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('ChargeType', 'I0000071').then(() => {
      queryInterface.dropTable('ChargeType');
    });
  }
};
