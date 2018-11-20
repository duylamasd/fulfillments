'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CmdReg', {
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      interfaceName: {
        type: Sequelize.STRING(254),
        allowNull: false,
        primaryKey: true
      },
      description: {
        type: Sequelize.STRING(254)
      },
      className: {
        type: Sequelize.STRING(254)
      },
      properties: {
        type: Sequelize.STRING(254)
      },
      target: {
        type: Sequelize.STRING(16),
        defaultValue: 'Local'
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
    return queryInterface.dropTable('CmdReg');
  }
};
