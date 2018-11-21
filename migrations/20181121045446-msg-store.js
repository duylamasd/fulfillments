'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MsgStore', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      messageIndex: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      message: {
        type: Sequelize.BLOB('long')
      },
      retries: {
        type: Sequelize.INTEGER
      },
      expiry: {
        type: Sequelize.DATE
      },
      transportId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
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
      await queryInterface.addIndex('MsgStore', {
        name: 'I0000624',
        fields: ['storeEntId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('MsgStore', 'I0000624').then(async () => {
      await queryInterface.dropTable('MsgStore');
    });
  }
};
