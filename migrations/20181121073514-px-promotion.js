'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PxPromotion', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      priority: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.TINYINT,
        allowNull: false
      },
      exclusive: {
        type: Sequelize.TINYINT,
        allowNull: false
      },
      type: {
        type: Sequelize.TINYINT,
        allowNull: false
      },
      perOrdLmt: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: -1
      },
      perShopPerLmt: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: -1
      },
      totalLmt: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: -1
      },
      pxGroupId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      campaignId: {
        type: Sequelize.UUID
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      version: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      revision: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      effective: {
        type: Sequelize.INTEGER
      },
      transfer: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      codeRequired: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      expire: {
        type: Sequelize.INTEGER
      },
      lastUpdatedBy: {
        type: Sequelize.UUID
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      targetSales: {
        type: Sequelize.DECIMAL(20, 5)
      },
      name: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      code: {
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
      await queryInterface.addIndex('PxPromotion', {
        name: 'I0000388',
        unique: true,
        fields: ['storeEntId', 'name', 'version', 'status', 'revision']
      });
      await queryInterface.addIndex('PxPromotion', {
        name: 'I0000398',
        fields: ['pxGroupId']
      });
      await queryInterface.addIndex('PxPromotion', {
        name: 'I0000399',
        fields: ['campaignId']
      });
      await queryInterface.addIndex('PxPromotion', {
        name: 'I0000400',
        fields: ['storeEntId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('PxPromotion', 'I0000388').then(async () => {
      await queryInterface.removeIndex('PxPromotion', 'I0000398');
      await queryInterface.removeIndex('PxPromotion', 'I0000399');
      await queryInterface.removeIndex('PxPromotion', 'I0000400');
      await queryInterface.dropTable('PxPromotion');
    });
  }
};
