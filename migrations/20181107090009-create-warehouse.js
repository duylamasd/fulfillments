'use strict';

module.exports = {
  // Create Warehouses table
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Warehouses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // Revert changes
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Warehouses');
  }
};
