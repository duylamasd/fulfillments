'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PxTemplate', {
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
      name: {
        type: Sequelize.STRING(64),
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
      await queryInterface.addIndex('PxTemplate', {
        name: 'I0000420',
        unique: true,
        fields: ['storeEntId', 'name']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('PxTemplate', 'I0000420').then(async () => {
      await queryInterface.dropTable('PxTable');
    });
  }
};
