'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contract', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      majorVersion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      minorVersion: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      name: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      memberId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      origin: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      state: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      usage: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      comments: {
        type: Sequelize.STRING(4000)
      },
      timeApproved: {
        type: Sequelize.DATE
      },
      timeActivated: {
        type: Sequelize.DATE
      },
      timeDeployed: {
        type: Sequelize.DATE
      },
      familyId: {
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
      await queryInterface.addIndex('Contract', {
        name: 'I0000078',
        unique: true,
        fields: ['name', 'memberId', 'majorVersion', 'minorVersion', 'origin']
      });
      await queryInterface.addIndex('Contract', {
        name: 'I0000539',
        fields: ['memberId']
      });
      await queryInterface.addIndex('Contract',{
        name: 'I0001510',
        fields: ['familyId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Contract', 'I0000078').then(async () => {
      await queryInterface.removeIndex('Contract', 'I0000539');
      await queryInterface.removeIndex('Contract', 'I0001510');
      await queryInterface.dropTable('Contract');
    });
  }
};
