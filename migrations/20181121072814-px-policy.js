'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PxPolicy', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      status: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
      name: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      implCls: {
        type: Sequelize.STRING(254),
        allowNull: false
      },
      xmlParam: {
        type: Sequelize.TEXT('long')
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
      await queryInterface.addIndex('PxPolicy', {
        name: 'I0000387',
        unique: true,
        fields: ['storeEntId', 'name']
      });
      await queryInterface.addIndex('PxPolicy', {
        name: 'I0000395',
        fields: ['storeEntId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('PxPolicy', 'I0000387').then(async () => {
      await queryInterface.removeIndex('PxPolicy', 'I0000395');
      await queryInterface.dropTable('PxPolicy');
    });
  }
};
