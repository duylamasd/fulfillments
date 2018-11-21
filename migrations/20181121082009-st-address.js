'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StAddress', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      address1: {
        type: Sequelize.STRING(256)
      },
      memberId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      address2: {
        type: Sequelize.STRING(128)
      },
      address3: {
        type: Sequelize.STRING(128)
      },
      city: {
        type: Sequelize.STRING(128)
      },
      country: {
        type: Sequelize.STRING(128)
      },
      email1: {
        type: Sequelize.STRING
      },
      email2: {
        type: Sequelize.STRING
      },
      fax1: {
        type: Sequelize.STRING(32)
      },
      fax2: {
        type: Sequelize.STRING(32)
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
      phone1: {
        type: Sequelize.STRING(32)
      },
      phone2: {
        type: Sequelize.STRING(32)
      },
      state: {
        type: Sequelize.STRING(128)
      },
      zipCode: {
        type: Sequelize.STRING(40)
      },
      firstname: {
        type: Sequelize.STRING(128)
      },
      lastname: {
        type: Sequelize.STRING(128)
      },
      middlename: {
        type: Sequelize.STRING(128)
      },
      personTitle: {
        type: Sequelize.STRING(50)
      },
      businessTitle: {
        type: Sequelize.STRING(128)
      },
      nickname: {
        type: Sequelize.STRING(254),
        allowNull: false
      },
      url: {
        type: Sequelize.STRING(254)
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
      await queryInterface.addIndex('StAddress', {
        name: 'I0000231',
        unique: true,
        fields: ['memberId', 'nickname']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('StAddress', 'I0000231').then(async () => {
      await queryInterface.dropTable('StAddress');
    });
  }
};
