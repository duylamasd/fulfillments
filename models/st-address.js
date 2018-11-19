'use strict';

module.exports = (sequelize, DataTypes) => {
  let StAddress = sequelize.define('StAddress', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    address1: {
      type: DataTypes.CHAR(256)
    },
    memberId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    address2: {
      type: DataTypes.CHAR(128)
    },
    address3: {
      type: DataTypes.CHAR(128)
    },
    city: {
      type: DataTypes.CHAR(128)
    },
    country: {
      type: DataTypes.CHAR(128)
    },
    email1: {
      type: DataTypes.CHAR
    },
    email2: {
      type: DataTypes.CHAR
    },
    fax1: {
      type: DataTypes.CHAR(32)
    },
    fax2: {
      type: DataTypes.CHAR(32)
    },
    field1: {
      type: DataTypes.CHAR(64)
    },
    field2: {
      type: DataTypes.CHAR(64)
    },
    field3: {
      type: DataTypes.CHAR(64)
    },
    phone1: {
      type: DataTypes.CHAR(32)
    },
    phone2: {
      type: DataTypes.CHAR(32)
    },
    state: {
      type: DataTypes.CHAR(128)
    },
    zipCode: {
      type: DataTypes.CHAR(40)
    },
    firstname: {
      type: DataTypes.CHAR(128)
    },
    lastname: {
      type: DataTypes.CHAR(128)
    },
    middlename: {
      type: DataTypes.CHAR(128)
    },
    personTitle: {
      type: DataTypes.CHAR(50)
    },
    businessTitle: {
      type: DataTypes.CHAR(128)
    },
    nickname: {
      type: DataTypes.CHAR(254),
      allowNull: false
    },
    url: {
      type: DataTypes.CHAR(254)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000231',
        unique: true,
        fields: ['memberId', 'nickname']
      }
    ]
  });

  StAddress.associate = models => {
    // F_314
    StAddress.hasMany(models.FfmCentDs, {
      foreignKey: 'stAddressId',
      sourceKey: 'id'
    });

    // F_757
    StAddress.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });
  };

  return StAddress;
};
