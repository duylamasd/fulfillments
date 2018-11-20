'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CalCode', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      code: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      calUsageId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      groupBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      txCdClassId: {
        type: Sequelize.UUID
      },
      published: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
      sequence: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0
      },
      calMethodId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      calMethodIdApp: {
        type: Sequelize.UUID,
        allowNull: false
      },
      calMethodIdQfy: {
        type: Sequelize.UUID,
        allowNull: false
      },
      field1: {
        type: Sequelize.STRING(254)
      },
      description: {
        type: Sequelize.STRING(254)
      },
      displayLevel: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      flags: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0
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
      return queryInterface.addIndex('CalCode', {
        name: 'I0000054',
        unique: true,
        fields: ['calUsageId', 'code', 'storeEntId']
      });
    }).then(() => {
      return queryInterface.addIndex('CalCode', {
        name: 'I0000495',
        fields: ['calMethodIdApp']
      });
    }).then(() => {
      return queryInterface.addIndex('CalCode', {
        name: 'I0000496',
        fields: ['calMethodId']
      });
    }).then(() => {
      return queryInterface.addIndex('CalCode', {
        name: 'I0000497',
        fields: ['calMethodIdQfy']
      });
    }).then(() => {
      return queryInterface.addIndex('CalCode', {
        name: 'I0000498',
        fields: ['storeEntId']
      });
    }).then(() => {
      return queryInterface.addIndex('CalCode', {
        name: 'I0001247',
        fields: ['txCdClassId']
      });
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('CalCode', 'I0000054').then(async () => {
      await queryInterface.removeIndex('CalCode', 'I0000495');
      await queryInterface.removeIndex('CalCode', 'I0000496');
      await queryInterface.removeIndex('CalCode', 'I0000497');
      await queryInterface.removeIndex('CalCode', 'I0000498');
      await queryInterface.removeIndex('CalCode', 'I0001247');
      await queryInterface.dropTable('CalCode');
    });
  }
};
