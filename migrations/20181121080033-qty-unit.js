'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('QtyUnit', {
      id: {
        type: Sequelize.STRING(16),
        allowNull: false,
        primaryKey: true
      },
      field1: {
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
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('QtyUnit');
  }
};
