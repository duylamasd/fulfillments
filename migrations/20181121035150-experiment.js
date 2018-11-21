'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Experiment', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      expTypeId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      prioriry: {
        type: Sequelize.SMALLINT,
        allowNull: false,
        defaultValue: 1
      },
      expireCount: {
        type: Sequelize.INTEGER
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      resultScope: {
        type: Sequelize.CHAR(1),
        allowNull: false
      },
      preferredElement: {
        type: Sequelize.SMALLINT
      },
      status: {
        type: Sequelize.CHAR(1),
        allowNull: false,
        defaultValue: 'A'
      },
      field1: {
        type: Sequelize.INTEGER
      },
      field2: {
        type: Sequelize.BIGINT
      },
      field3: {
        type: Sequelize.DECIMAL(20, 5)
      },
      field4: {
        type: Sequelize.STRING(254)
      },
      description: {
        type: Sequelize.STRING(254)
      },
      lastUpdatedBy: {
        type: Sequelize.STRING(254),
        allowNull: false
      },
      ruleXml: {
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
      await queryInterface.addIndex('Experiment', {
        name: 'I0001500',
        unique: true,
        fields: ['name', 'storeEntId']
      });
      await queryInterface.addIndex('Experiment', {
        name: 'I0001501',
        fields: ['storeEntId', 'status']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Experiment', 'I0001500').then(async () => {
      await queryInterface.removeIndex('Experiment', 'I0001501');
      await queryInterface.dropTable('Experiment');
    });
  }
};
