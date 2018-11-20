'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Campaign', {
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
      description: {
        type: Sequelize.STRING(254)
      },
      field1: {
        type: Sequelize.STRING(254)
      },
      lastUpdatedBy: {
        type: Sequelize.UUID
      },
      owner: {
        type: Sequelize.STRING(64)
      },
      objective: {
        type: Sequelize.STRING(254)
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
      return queryInterface.addIndex('Campaign', {
        name: 'I0000060',
        unique: true,
        fields: ['name', 'storeEntId']
      });
    }).then(() => {
      return queryInterface.addIndex('Campaign', {
        name: 'I0000511',
        fields: ['storeEntId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Campaign', 'I0000060').then(async () => {
      await queryInterface.removeIndex('Campaign', 'I0000511');
      await queryInterface.dropTable('Campaign');
    });
  }
};
