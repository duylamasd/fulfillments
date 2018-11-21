'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PxGroup', {
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
        defaultValue: 1
      },
      grpName: {
        type: Sequelize.STRING(128),
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
      await queryInterface.addIndex('PxGroup', {
        name: 'I0000386',
        unique: true,
        fields: ['storeEntId', 'grpName']
      });
      await queryInterface.addIndex('PxGroup', {
        name: 'I0000394',
        fields: ['storeEntId']
      });
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('PxGroup', 'I0000386').then(async () => {
      await queryInterface.removeIndex('PxGroup', 'I0000394');
      await queryInterface.dropTable('PxGroup');
    });
  }
};
