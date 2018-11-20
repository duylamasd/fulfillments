'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Account', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      memberId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      storeId: {
        type: Sequelize.UUID
      },
      state: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
      currency: {
        type: Sequelize.CHAR(3)
      },
      defaultContract: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      comments: {
        type: Sequelize.STRING(4000)
      },
      timeActivated: {
        type: Sequelize.DATE
      },
      prcPlcyPref: {
        type: Sequelize.STRING(32)
      },
      usePrcPlcyPref: {
        type: Sequelize.TINYINT
      },
      upName: {
        type: Sequelize.STRING(200)
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
      return queryInterface.addIndex('Account', {
        name: 'I0000005',
        unique: true,
        fields: ['name', 'memberId']
      });
    }).then(() => {
      return queryInterface.addIndex('Account', {
        name: 'I0000434',
        fields: ['memberId']
      });
    }).then(() => {
      return queryInterface.addIndex('Account', {
        name: 'I0000435',
        fields: ['storeId']
      });
    }).then(() => {
      return queryInterface.addIndex('Account', {
        name: 'IPF00027',
        fields: ['upName']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Account', 'I0000005').then(async () => {
      await queryInterface.removeIndex('Account', 'I0000434');
      await queryInterface.removeIndex('Account', 'I0000435');
      await queryInterface.removeIndex('Account', 'IPF00027');
      await queryInterface.dropTable('Account');
    });
  }
};
