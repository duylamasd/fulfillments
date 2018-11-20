'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CalUsage', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      description: {
        type: Sequelize.STRING(254)
      },
      stRelTypNameCfg: {
        type: Sequelize.STRING(60)
      },
      stRelTypNameRt: {
        type: Sequelize.STRING(64)
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
    return queryInterface.dropTable('CalUsage');
  }
};
