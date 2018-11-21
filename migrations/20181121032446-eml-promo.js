'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EmlPromo', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      status: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
      modifiedBy: {
        type: Sequelize.STRING(254)
      },
      description: {
        type: Sequelize.STRING(254)
      },
      name: {
        type: Sequelize.STRING(254),
        allowNull: false
      },
      emlMsgId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      sccJobRefNum: {
        type: Sequelize.UUID,
        allowNull: false
      },
      replyTo: {
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
      await queryInterface.addIndex('EmlPromo', {
        name: 'I0000339',
        fields: ['storeEntId']
      });
      await queryInterface.addIndex('EmlPromo', {
        name: 'I0000564',
        fields: ['emlMsgId']
      });
      await queryInterface.addIndex('EmlPromo', {
        name: 'I0000565',
        fields: ['sccJobRefNum']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('EmlPromo', 'I0000339').then(async () => {
      await queryInterface.removeIndex('EmlPromo', 'I0000564');
      await queryInterface.removeIndex('EmlPromo', 'I0000565');
      await queryInterface.dropTable('EmlPromo');
    });
  }
};
