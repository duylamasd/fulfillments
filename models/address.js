'use strict';

module.exports = (sequelize, DataTypes) => {
  let Address = sequelize.define('Address', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    type: {
      type: DataTypes.ENUM,
      values: ['shipto', 'billto', 'SB'],
      defaultValue: 'SB'
    },
    memberId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    addrBookId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    orgUnitName: {
      type: DataTypes.STRING(128)
    },
    field1: {
      type: DataTypes.STRING(64)
    },
    field2: {
      type: DataTypes.STRING(64)
    },
    field3: {
      type: DataTypes.STRING(64)
    },
    billingCode: {
      type: DataTypes.STRING(17)
    },
    billingCodeType: {
      type: DataTypes.CHAR(2)
    },
    status: {
      type: DataTypes.ENUM,
      values: ['P', 'T']
    },
    orgName: {
      type: DataTypes.STRING(128)
    },
    isPrimary: {
      type: DataTypes.BOOLEAN
    },
    lastname: {
      type: DataTypes.STRING(128)
    },
    personTitle: {
      type: DataTypes.STRING(50)
    },
    firstname: {
      type: DataTypes.STRING(128)
    },
    middlename: {
      type: DataTypes.STRING(128)
    },
    businessTitle: {
      type: DataTypes.STRING(128)
    },
    phone1: {
      type: DataTypes.STRING(32)
    },
    phone1Type: {
      type: DataTypes.CHAR(3)
    },
    phone2Type: {
      type: DataTypes.CHAR(3)
    },
    phone2: {
      type: DataTypes.STRING(32)
    },
    fax1: {
      type: DataTypes.STRING(32)
    },
    fax2: {
      type: DataTypes.STRING(32)
    },
    address1: {
      type: DataTypes.STRING(256)
    },
    address2: {
      type: DataTypes.STRING(128)
    },
    address3: {
      type: DataTypes.STRING(128)
    },
    city: {
      type: DataTypes.STRING(128)
    },
    state: {
      type: DataTypes.STRNIG(128)
    },
    country: {
      type: DataTypes.STRING(128)
    },
    zipCode: {
      type: DataTypes.STRING(40)
    },
    email1: {
      type: DataTypes.STRING(256)
    },
    email2: {
      type: DataTypes.STRING(256)
    },
    publishPhone1: {
      type: DataTypes.BOOLEAN
    },
    publishPhone2: {
      type: DataTypes.BOOLEAN
    },
    bestCallingTime: {
      type: DataTypes.ENUM,
      values: ['E', 'D']
    },
    packageSuppression: {
      type: DataTypes.INTEGER
    },
    lastCreate: {
      type: DataTypes.DATE
    },
    officeAddress: {
      type: DataTypes.STRING(128)
    },
    selfAddress: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    taxGeoCode: {
      type: DataTypes.STRING(254)
    },
    shippingGeoCode: {
      type: DataTypes.STRING(254)
    },
    mobilePhone1: {
      type: DataTypes.STRING(32)
    },
    mobilePhone1Cntry: {
      type: DataTypes.STRING(128)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000015',
        fields: ['addrBookId', 'type', 'isPrimary', 'status']
      },
      {
        name: 'I0000016',
        fields: ['memberId', 'status', 'selfAddress', 'type', 'isPrimary']
      },
      {
        name: 'I0000346',
        fields: ['lastname']
      },
      {
        name: 'I0001521',
        fields: ['email1']
      }
    ]
  });

  Address.associate = models => {
    // F_59
    Address.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    // F_515
    Address.hasMany(models.Orders, {
      foreignKey: 'addressId',
      sourceKey: 'id'
    });

    // F_58
    Address.belongsTo(models.AddrBook, {
      foreignKey: 'id',
      targetKey: 'id'
    });

    // F_1090
    Address.hasMany(models.OrdRelease, {
      foreignKey: 'addressId',
      sourceKey: 'id'
    });
  };

  return Address;
};
