'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Address', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      type: {
        type: Sequelize.STRING(10),
        defaultValue: 'SB'
      },
      memberId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      addrBookId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      orgUnitName: {
        type: Sequelize.STRING(128)
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
      billingCode: {
        type: Sequelize.STRING(17)
      },
      billingCodeType: {
        type: Sequelize.CHAR(2)
      },
      status: {
        type: Sequelize.CHAR(1)
      },
      orgName: {
        type: Sequelize.STRING(128)
      },
      isPrimary: {
        type: Sequelize.BOOLEAN
      },
      lastname: {
        type: Sequelize.STRING(128)
      },
      personTitle: {
        type: Sequelize.STRING(50)
      },
      firstname: {
        type: Sequelize.STRING(128)
      },
      middlename: {
        type: Sequelize.STRING(128)
      },
      businessTitle: {
        type: Sequelize.STRING(128)
      },
      phone1: {
        type: Sequelize.STRING(32)
      },
      phone1Type: {
        type: Sequelize.CHAR(3)
      },
      phone2Type: {
        type: Sequelize.CHAR(3)
      },
      phone2: {
        type: Sequelize.STRING(32)
      },
      fax1: {
        type: Sequelize.STRING(32)
      },
      fax2: {
        type: Sequelize.STRING(32)
      },
      address1: {
        type: Sequelize.STRING(256)
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
      state: {
        type: Sequelize.STRING(128)
      },
      country: {
        type: Sequelize.STRING(128)
      },
      zipCode: {
        type: Sequelize.STRING(40)
      },
      email1: {
        type: Sequelize.STRING(256)
      },
      email2: {
        type: Sequelize.STRING(256)
      },
      publishPhone1: {
        type: Sequelize.BOOLEAN
      },
      publishPhone2: {
        type: Sequelize.BOOLEAN
      },
      bestCallingTime: {
        type: Sequelize.CHAR(1)
      },
      packageSuppression: {
        type: Sequelize.INTEGER
      },
      lastCreate: {
        type: Sequelize.DATE
      },
      officeAddress: {
        type: Sequelize.STRING(128)
      },
      selfAddress: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      taxGeoCode: {
        type: Sequelize.STRING(254)
      },
      shippingGeoCode: {
        type: Sequelize.STRING(254)
      },
      mobilePhone1: {
        type: Sequelize.STRING(32)
      },
      mobilePhone1Cntry: {
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
    }).then(() => {
      return queryInterface.addIndex('Address', {
        name: 'I0000015',
        fields: ['addrBookId', 'type', 'isPrimary', 'status']
      });
    }).then(() => {
      return queryInterface.addIndex('Address', {
        name: 'I0000016',
        fields: ['memberId', 'status', 'selfAddress', 'type', 'isPrimary']
      });
    }).then(() => {
      return queryInterface.addIndex('Address', {
        name: 'I0000346',
        fields: ['lastname']
      });
    }).then(() => {
      return queryInterface.addIndex('Address', {
        name: 'I0001521',
        fields: ['email1']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Address', 'I0000015').then(async () => {
      await queryInterface.removeIndex('Address', 'I0000016');
      await queryInterface.removeIndex('Address', 'I0000346');
      await queryInterface.removeIndex('Address', 'I0001521');
      await queryInterface.dropTable('Address');
    });
  }
};
