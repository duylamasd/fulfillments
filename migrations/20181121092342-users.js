'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      dn: {
        type: Sequelize.STRING(1000)
      },
      registerType: {
        type: Sequelize.CHAR(1),
        allowNull: false
      },
      profileType: {
        type: Sequelize.CHAR(1)
      },
      languageId: {
        type: Sequelize.INTEGER
      },
      field1: {
        type: Sequelize.STRING(254)
      },
      field2: {
        type: Sequelize.STRING(254)
      },
      field3: {
        type: Sequelize.STRING(254)
      },
      setcCurr: {
        type: Sequelize.CHAR(3)
      },
      lastOrder: {
        type: Sequelize.DATE
      },
      registration: {
        type: Sequelize.DATE
      },
      lastSession: {
        type: Sequelize.DATE
      },
      registrationUpdate: {
        type: Sequelize.DATE
      },
      personalizationId: {
        type: Sequelize.STRING(30)
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
      await queryInterface.addIndex('Users', {
        name: 'I0000969',
        fields: ['dn']
      });
      await queryInterface.addIndex('Users', {
        name: 'I0000971',
        fields: ['registerType']
      });
      await queryInterface.addIndex('Users', {
        name: 'I0001109',
        fields: ['personalizationId']
      });
      await queryInterface.addIndex('Users', {
        name: 'I348118',
        fields: ['profileType', 'registerType', 'id']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Users', 'I0000969').then(async () => {
      await queryInterface.removeIndex('Users', 'I0000971');
      await queryInterface.removeIndex('Users', 'I0001109');
      await queryInterface.removeIndex('Users', 'I348118');
      await queryInterface.dropTable('Users');
    });
  }
};
