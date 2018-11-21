'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PxUsage', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      ordersId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      usersId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      version: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      guestId: {
        type: Sequelize.STRING(256)
      },
      name: {
        type: Sequelize.STRING(128),
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
      await queryInterface.addIndex('PxUsage', {
        name: 'I0000392',
        fields: ['storeEntId', 'name', 'version']
      });
      await queryInterface.addIndex('PxUsage', {
        name: 'I0000393',
        fields: ['guestId']
      });
      await queryInterface.addIndex('PxUsage', {
        name: 'I0000407',
        fields: ['usersId']
      });
      await queryInterface.addIndex('PxUsage', {
        name: 'I0000408',
        fields: ['ordersId']
      });
      await queryInterface.addIndex('PxUsage', {
        name: 'I0000409',
        fields: ['storeEntId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('PxUsage', 'I0000392').then(async () => {
      await queryInterface.removeIndex('PxUsage', 'I0000393');
      await queryInterface.removeIndex('PxUsage', 'I0000407');
      await queryInterface.removeIndex('PxUsage', 'I0000408');
      await queryInterface.removeIndex('PxUsage', 'I0000409');
      await queryInterface.dropTable('PxUsage');
    });
  }
};
