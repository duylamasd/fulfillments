'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      ormOrder: {
        type: Sequelize.CHAR(30)
      },
      orgEntityId: {
        type: Sequelize.UUID
      },
      totalProduct: {
        type: Sequelize.DECIMAL(20, 5),
        defaultValue: 0
      },
      totalTax: {
        type: Sequelize.DECIMAL(20, 5),
        defaultValue: 0
      },
      totalShipping: {
        type: Sequelize.DECIMAL(20, 5),
        defaultValue: 0
      },
      totalTaxShipping: {
        type: Sequelize.DECIMAL(20, 5),
        defaultValue: 0
      },
      description: {
        type: Sequelize.STRING(254)
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      currency: {
        type: Sequelize.CHAR(10)
      },
      timePlaced: {
        type: Sequelize.DATE
      },
      sequence: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 0
      },
      status: {
        type: Sequelize.STRING(3)
      },
      memberId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      field1: {
        type: Sequelize.INTEGER
      },
      field2: {
        type: Sequelize.DECIMAL(20, 5)
      },
      field3: {
        type: Sequelize.STRING(254)
      },
      addressId: {
        type: Sequelize.UUID
      },
      totalAdjustment: {
        type: Sequelize.DECIMAL(20, 5),
        defaultValue: 0
      },
      comments: {
        type: Sequelize.STRING(254)
      },
      notificationId: {
        type: Sequelize.UUID
      },
      type: {
        type: Sequelize.CHAR(3)
      },
      editorId: {
        type: Sequelize.UUID
      },
      busChnId: {
        type: Sequelize.UUID
      },
      sourceId: {
        type: Sequelize.UUID
      },
      expireDate: {
        type: Sequelize.DATE
      },
      blocked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      opSystemId: {
        type: Sequelize.UUID
      },
      transferStatus: {
        type: Sequelize.TINYINT
      },
      buyerPoId: {
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
      await queryInterface.addIndex('Orders', {
        name: 'I0000176',
        fields: ['memberId', 'status', 'storeEntId']
      });
      await queryInterface.addIndex('Orders', {
        name: 'I0000652',
        fields: ['addressId']
      });
      await queryInterface.addIndex('Orders', {
        name: 'I0000653',
        fields: ['orgEntityId']
      });
      await queryInterface.addIndex('Orders', {
        name: 'I0000654',
        fields: ['storeEntId']
      });
      await queryInterface.addIndex('Orders', {
        name: 'I0000892',
        fields: ['editorId']
      });
      await queryInterface.addIndex('Orders', {
        name: 'I0000933',
        fields: ['sourceId']
      });
      await queryInterface.addIndex('Orders', {
        name: 'I0001267',
        fields: ['buyerPoId']
      });
      await queryInterface.addIndex('Orders', {
        name: 'I0001508',
        fields: ['status', 'updatedAt']
      });
      await queryInterface.addIndex('Orders', {
        name: 'I173124',
        fields: ['timePlaced']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Orders', 'I0000176').then(async () => {
      await queryInterface.removeIndex('Orders', 'I0000652');
      await queryInterface.removeIndex('Orders', 'I0000653');
      await queryInterface.removeIndex('Orders', 'I0000654');
      await queryInterface.removeIndex('Orders', 'I0000892');
      await queryInterface.removeIndex('Orders', 'I0000933');
      await queryInterface.removeIndex('Orders', 'I0001267');
      await queryInterface.removeIndex('Orders', 'I0001508');
      await queryInterface.removeIndex('Orders', 'I173124');
      await queryInterface.dropTable('Orders');
    });
  }
};
