'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('OrgEntity', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      legalId: {
        type: Sequelize.STRING(128)
      },
      orgEntityType: {
        type: Sequelize.STRING(2),
        allowNull: false
      },
      orgEntityName: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      businessCategory: {
        type: Sequelize.STRING(128)
      },
      description: {
        type: Sequelize.STRING(512)
      },
      adminFirstname: {
        type: Sequelize.STRING(128)
      },
      adminLastname: {
        type: Sequelize.STRING(128)
      },
      adminMiddlename: {
        type: Sequelize.STRING(128)
      },
      preferredDelivery: {
        type: Sequelize.STRING(1000)
      },
      field1: {
        type: Sequelize.STRING(64)
      },
      field2: {
        type: Sequelize.STRING(64)
      },
      field3: {
        type: Sequelize.STRING(64)
      },
      taxPayerId: {
        type: Sequelize.STRING(254)
      },
      dn: {
        type: Sequelize.STRING(1000)
      },
      locked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
      await queryInterface.addIndex('OrgEntity', {
        name: 'I0000970',
        fields: ['dn']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('OrgEntity', 'I0000970').then(async () => {
      await queryInterface.dropTable('OrgEntity');
    });
  }
};
