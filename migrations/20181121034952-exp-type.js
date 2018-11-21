'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ExpType', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(254)
      },
      implCls: {
        type: Sequelize.STRING(254),
        allowNull: false
      },
      objCls: {
        type: Sequelize.STRING(254),
        allowNull: false
      },
      field1: {
        type: Sequelize.STRING(254)
      },
      field2: {
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
    return queryInterface.dropTable('ExpType');
  }
};
