'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CatEntShip', {
      catEntryId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      weight: {
        type: Sequelize.DOUBLE
      },
      weightMeasure: {
        type: Sequelize.STRING(16)
      },
      length: {
        type: Sequelize.DOUBLE
      },
      width: {
        type: Sequelize.DOUBLE
      },
      height: {
        type: Sequelize.DOUBLE
      },
      sizeMeasure: {
        type: Sequelize.STRING(16)
      },
      nominalQuantity: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 1.0
      },
      quantityMultiple: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 1.0
      },
      quantityMeasure: {
        type: Sequelize.STRING(16),
        allowNull: false,
        defaultValue: 'C62'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CatEntShip');
  }
};
