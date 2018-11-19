'use strict';

module.exports = (sequelize, DataTypes) => {
  let OrgEntity = sequelize.define('OrgEntity', {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    legalId: {
      type: DataTypes.STRING(128)
    },
    orgEntityType: {
      type: DataTypes.ENUM,
      values: ['O', 'OU', 'AD'],
      allowNull: false
    },
    orgEntityName: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    businessCategory: {
      type: DataTypes.STRING(128)
    },
    description: {
      type: DataTypes.STRING(512)
    },
    adminFirstname: {
      type: DataTypes.STRING(128)
    },
    adminLastname: {
      type: DataTypes.STRING(128)
    },
    adminMiddlename: {
      type: DataTypes.STRING(128)
    },
    preferredDelivery: {
      type: DataTypes.STRING(1000)
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
    taxPayerId: {
      type: DataTypes.STRING(254)
    },
    dn: {
      type: DataTypes.STRING(1000)
    },
    locked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000970',
        fields: ['dn']
      }
    ]
  });

  OrgEntity.associate = models => {
    // F_555
    OrgEntity.belongsTo(models.Member, {
      foreignKey: 'id',
      targetKey: 'id'
    });

    // F_513
    OrgEntity.hasMany(models.Orders, {
      foreignKey: 'orgEntityId',
      targetKey: 'id'
    });
  };

  return OrgEntity;
};
