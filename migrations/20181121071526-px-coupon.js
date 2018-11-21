'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PxCoupon', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      usersId: {
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
      effective: {
        type: Sequelize.DATE,
        allowNull: false
      },
      expire: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
      ordersId: {
        type: Sequelize.UUID
      },
      guestId: {
        type: Sequelize.STRING(128)
      },
      name: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      code: {
        type: Sequelize.STRING(128)
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
      await queryInterface.addIndex('PxCoupon', {
        name: 'I0000389',
        fields: ['storeEntId', 'name', 'version']
      });
      await queryInterface.addIndex('PxCoupon', {
        name: 'I0000390',
        fields: ['ordersId', 'usersId']
      });
      await queryInterface.addIndex('PxCoupon', {
        name: 'I0000391',
        fields: ['ordersId', 'guestId']
      });
      await queryInterface.addIndex('PxCoupon', {
        name: 'I0000404',
        fields: ['storeEntId']
      });
      await queryInterface.addIndex('PxCoupon', {
        name: 'I0000405',
        fields: ['usersId']
      });
      await queryInterface.addIndex('PxCoupon', {
        name: 'I0000406',
        fields: ['ordersId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('PxCoupon', 'I0000389').then(async () => {
      await queryInterface.removeIndex('PxCoupon', 'I0000390');
      await queryInterface.removeIndex('PxCoupon', 'I0000391');
      await queryInterface.removeIndex('PxCoupon', 'I0000404');
      await queryInterface.removeIndex('PxCoupon', 'I0000405');
      await queryInterface.removeIndex('PxCoupon', 'I0000406');
      await queryInterface.dropTable('PxCoupon');
    });
  }
};
