'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TxCdScheme', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      description: {
        type: Sequelize.STRING(254)
      },
      vendor: {
        type: Sequelize.STRING(32)
      },
      software: {
        type: Sequelize.STRING(32)
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
      await queryInterface.addIndex('TxCdScheme', {
        name: 'I0000259',
        unique: true,
        fields: ['vendor', 'software']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('TxCdScheme', 'I0000259').then(async () => {
      await queryInterface.dropTable('TxCdScheme');
    });
  }
};
