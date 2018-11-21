'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EmlBounced', {
      emlPromoId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      usersId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      statusCode: {
        type: Sequelize.STRING(10)
      },
      lastBounce: {
        type: Sequelize.DATE
      },
      lastRetry: {
        type: Sequelize.DATE
      },
      retryCount: {
        type: Sequelize.SMALLINT
      },
      maxRetryHit: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      emlAddrIndex: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      emailAddress: {
        type: Sequelize.STRING(256)
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
      await queryInterface.addIndex('EmlBounced', {
        name: 'I0000378',
        fields: ['usersId']
      });
      await queryInterface.addIndex('EmlBounced', {
        name: 'I0000379',
        fields: ['emlPromoId']
      });
      await queryInterface.addIndex('EmlBounced', {
        name: 'I0000380',
        fields: ['storeEntId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('EmlBounced', 'I0000378').then(async () => {
      await queryInterface.removeIndex('EmlBounced', 'I0000379');
      await queryInterface.removeIndex('EmlBounced', 'I0000380');
      await queryInterface.dropTable('EmlBounced');
    });
  }
};
