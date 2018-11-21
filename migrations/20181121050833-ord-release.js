'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OrdRelease', {
      ordReleaseNum: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      ordersId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      ffmAcknowledgement: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.CHAR(3)
      },
      customerConfirm: {
        type: Sequelize.DATE
      },
      field1: {
        type: Sequelize.INTEGER
      },
      field2: {
        type: Sequelize.STRING(254)
      },
      field3: {
        type: Sequelize.STRING(254)
      },
      pickBatchId: {
        type: Sequelize.UUID
      },
      timePlaced: {
        type: Sequelize.DATE
      },
      packSlipSml: {
        type: Sequelize.TEXT('long')
      },
      captureDate: {
        type: Sequelize.DATE
      },
      extOrdNum: {
        type: Sequelize.STRING(64)
      },
      extRef: {
        type: Sequelize.STRING(2048)
      },
      ffmCenterId: {
        type: Sequelize.UUID
      },
      isExpEdited: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      shipModeId: {
        type: Sequelize.UUID
      },
      addressId: {
        type: Sequelize.UUID
      },
      memberId: {
        type: Sequelize.UUID
      },
      storeEntId: {
        type: Sequelize.UUID
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
      await queryInterface.addIndex('OrdRelease', {
        name: 'I0000180',
        fields: ['status', 'ordersId', 'ordReleaseNum', 'pickBatchId']
      });
      await queryInterface.addIndex('OrdRelease', {
        name: 'I0000836',
        fields: ['ffmCenterId']
      });
      await queryInterface.addIndex('OrdRelease', {
        name: 'I0000837',
        fields: ['shipModeId']
      });
      await queryInterface.addIndex('OrdRelease', {
        name: 'I0000838',
        fields: ['addressId']
      });
      await queryInterface.addIndex('OrdRelease', {
        name: 'I0000839',
        fields: ['memberId']
      });
      await queryInterface.addIndex('OrdRelease', {
        name: 'I0000840',
        fields: ['storeEntId']
      });
      await queryInterface.addIndex('OrdRelease', {
        name: 'I803140',
        fields: ['pickBatchId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('OrdRelease', 'I0000180').then(async () => {
      await queryInterface.removeIndex('OrdRelease', 'I0000836');
      await queryInterface.removeIndex('OrdRelease', 'I0000837');
      await queryInterface.removeIndex('OrdRelease', 'I0000838');
      await queryInterface.removeIndex('OrdRelease', 'I0000839');
      await queryInterface.removeIndex('OrdRelease', 'I0000840');
      await queryInterface.removeIndex('OrdRelease', 'I803140');
      await queryInterface.dropTable('OrdRelease');
    });
  }
};
