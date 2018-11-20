'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BuyerPo', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      setcCurr: {
        type: Sequelize.CHAR(3)
      },
      accountId: {
        type: Sequelize.UUID
      },
      poNumber: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      buyerPoTypeId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      state: {
        type: Sequelize.TINYINT,
        defaultValue: 0
      },
      amount: {
        type: Sequelize.DECIMAL(20, 5)
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
      return queryInterface.addIndex('BuyerPo', {
        name: 'I0000488',
        fields: ['accountId']
      });
    }).then(() => {
      return queryInterface.addIndex('BuyerPo', {
        name: 'I0000489',
        fields: ['buyerPoTypeId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('BuyerPo', 'I0000488').then(async () => {
      await queryInterface.removeIndex('BuyerPo', 'I0000489');
      await queryInterface.dropTable('BuyerPo');
    });
  }
};
