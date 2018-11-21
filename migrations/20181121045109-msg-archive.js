'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MsgArchive', {
      transportId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      id: {
        type: Sequelize.UUID,
        allowNull: false
      },
      messageIndex: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      message: {
        type: Sequelize.BLOB('long')
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
      await queryInterface.addIndex('MsgArchive', {
        name: 'I0000622',
        fields: ['storeEntId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('MsgArchive', 'I0000622').then(async () => {
      await queryInterface.dropTable('MsgArchive');
    });
  }
};
