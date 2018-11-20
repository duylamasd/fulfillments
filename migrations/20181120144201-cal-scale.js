'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CalScale', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      qtyUnitId: {
        type: Sequelize.STRING(16)
      },
      code: {
        type: Sequelize.STRING(30)
      },
      description: {
        type: Sequelize.STRING(254)
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      calUsageId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      setcCurr: {
        type: Sequelize.CHAR(3)
      },
      calMethodId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      field1: {
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
      return queryInterface.addIndex('CalScale', {
        name: 'I0000059',
        unique: true,
        fields: ['calUsageId', 'code', 'storeEntId']
      });
    }).then(() => {
      return queryInterface.addIndex('CalScale', {
        name: 'I0000508',
        fields: ['calMethodId']
      });
    }).then(() => {
      return queryInterface.addIndex('CalScale', {
        name: 'I0000509',
        fields: ['storeEntId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('CalScale', 'I0000059').then(async () => {
      await queryInterface.removeIndex('CalScale', 'I0000508');
      await queryInterface.removeIndex('CalScale', 'I0000509');
      await queryInterface.dropTable('CalScale');
    });
  }
};
