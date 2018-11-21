'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FfmCenter', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      memberId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING
      },
      defaultShipOffset: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 86400
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      extFfmStoreNum: {
        type: Sequelize.STRING(128)
      },
      inventoryOpFlags: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      maxNumPick: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        defaultValue: 25
      },
      pickDelayInMin: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        defaultValue: 5
      },
      dropShip: {
        type: Sequelize.CHAR(1),
        allowNull: false,
        defaultValue: 'N'
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
      await queryInterface.addIndex('FfmCenter', {
        name: 'I0000101',
        unique: true,
        fields: ['memberId', 'name']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('FfmCenter', 'I0000101').then(async () => {
      await queryInterface.dropTable('FfmCenter');
    });
  }
};
