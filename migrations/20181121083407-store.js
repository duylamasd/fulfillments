'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Store', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      storeGrpId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      storeCgryId: {
        type: Sequelize.UUID
      },
      languageId: {
        type: Sequelize.INTEGER
      },
      ffmCenterId: {
        type: Sequelize.UUID
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      storeLevel: {
        type: Sequelize.STRING(10)
      },
      directory: {
        type: Sequelize.STRING
      },
      quoteGoodFor: {
        type: Sequelize.INTEGER,
        defaultValue: 43200
      },
      field1: {
        type: Sequelize.STRING
      },
      field2: {
        type: Sequelize.STRING
      },
      allocationGoodFor: {
        type: Sequelize.INTEGER,
        defaultValue: 43200,
        allowNull: false
      },
      maxBooffSet: {
        type: Sequelize.INTEGER,
        defaultValue: 7776000,
        allowNull: false
      },
      rejectedOrdExpiry: {
        type: Sequelize.INTEGER,
        defaultValue: 259200
      },
      ffmcSelectionFlags: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
        allowNull: false
      },
      bopmPadFactor: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      rtnFfmCtrId: {
        type: Sequelize.UUID
      },
      defaultBooffSet: {
        type: Sequelize.INTEGER,
        defaultValue: 7776000,
        allowNull: false
      },
      priceRefFlags: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
        allowNull: false
      },
      storeType: {
        type: Sequelize.CHAR(3)
      },
      rmaGoodFor: {
        type: Sequelize.INTEGER,
        defaultValue: 86400
      },
      avsAcceptCodes: {
        type: Sequelize.STRING(64)
      },
      crtDbyCntrId: {
        type: Sequelize.UUID
      },
      lastUpdateStatus: {
        type: Sequelize.DATE
      },
      allocationOffset: {
        type: Sequelize.INTEGER,
        defaultValue: 86400,
        allowNull: false
      },
      maxFoOffset: {
        type: Sequelize.INTEGER,
        defaultValue: 7776000
      },
      inventoryOpFlag: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: 0
      },
      blockingActive: {
        type: Sequelize.SMALLINT,
        defaultValue: 1
      },
      blkextAsynch: {
        type: Sequelize.SMALLINT,
        defaultValue: 0,
        allowNull: false
      },
      persistentSession: {
        type: Sequelize.TINYINT
      },
      orderHistActive: {
        type: Sequelize.CHAR(1),
        defaultValue: 'Y',
        allowNull: false
      },
      inventorySystem: {
        type: Sequelize.INTEGER,
        defaultValue: -1,
        allowNull: false
      },
      upDirectory: {
        type: Sequelize.STRING
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
      await queryInterface.addIndex('Store', {
        name: 'I0000778',
        fields: ['ffmCenterId']
      });
      await queryInterface.addIndex('Store', {
        name: 'I0000779',
        fields: ['storeCgryId']
      });
      await queryInterface.addIndex('Store', {
        name: 'I0000780',
        fields: ['rtnFfmCtrId']
      });
      await queryInterface.addIndex('Store', {
        name: 'I0000781',
        fields: ['crtDbyCntrId']
      });
      await queryInterface.addIndex('Store', {
        name: 'I0001288',
        fields: ['storeGrpId']
      });
      await queryInterface.addIndex('Store', {
        name: 'IPF00026',
        fields: ['upDirectory']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Store', 'I0000778').then(async () => {
      await queryInterface.removeIndex('Store', 'I0000779');
      await queryInterface.removeIndex('Store', 'I0000780');
      await queryInterface.removeIndex('Store', 'I0000781');
      await queryInterface.removeIndex('Store', 'I0001288');
      await queryInterface.removeIndex('Store', 'IPF00026');
      await queryInterface.dropTable('Store');
    });
  }
};
