'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CalMethod', {
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
      calUsageId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      taskName: {
        type: Sequelize.STRING(254)
      },
      description: {
        type: Sequelize.STRING(508)
      },
      subClass: {
        type: Sequelize.INTEGER
      },
      name: {
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
      return queryInterface.addIndex('CalMethod', {
        name: 'I0000055',
        unique: true,
        fields: ['subClass', 'calUsageId', 'storeEntId', 'name']
      });
    }).then(() => {
      return queryInterface.addIndex('CalMethod', {
        name: 'I0000501',
        fields: ['storeEntId']
      });
    }).then(() => {
      return queryInterface.addIndex('CalMethod', {
        name: 'I0000502',
        fields: ['calUsageId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('CalMethod', 'I0000055').then(async () => {
      await queryInterface.removeIndex('CalMethod', 'I0000501');
      await queryInterface.removeIndex('CalMethod', 'I0000502');
      await queryInterface.dropTable('CalMethod');
    });
  }
};
