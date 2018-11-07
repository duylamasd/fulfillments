'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Shelf', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      whId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Warehouses',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => {
      return queryInterface.addConstraint('Shelf', ['id', 'whId'], {
        type: 'primary key',
        name: 'Shelf_primary_key'
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Shelf');
  }
};
