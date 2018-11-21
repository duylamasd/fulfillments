'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trading', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      trdTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      accountId: {
        type: Sequelize.UUID
      },
      state: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      referenceCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      startTime: {
        type: Sequelize.DATE
      },
      endTime: {
        type: Sequelize.DATE
      },
      creditAllowed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      refTradingId: {
        type: Sequelize.UUID
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
      await queryInterface.addIndex('Trading', {
        name: 'I0000815',
        fields: ['trdTypeId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Trading', 'I0000815').then(async () => {
      await queryInterface.dropTable('Trading');
    });
  }
};
