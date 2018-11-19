'use strict';

module.exports = (sequelize, DataTypes) => {
  let CatEntry = sequelize.define('CatEntry', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    memberId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    itemSpcId: {
      type: DataTypes.UUIDV4
    },
    catEntTypeId: {
      type: DataTypes.CHAR(16),
      allowNull: false
    },
    partNumber: {
      type: DataTypes.CHAR(64),
      allowNull: false
    },
    mfPartNumber: {
      type: DataTypes.CHAR(64)
    },
    mfName: {
      type: DataTypes.CHAR(64)
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    url: {
      type: DataTypes.CHAR
    },
    field1: {
      type: DataTypes.INTEGER
    },
    field2: {
      type: DataTypes.INTEGER
    },
    field3: {
      type: DataTypes.DECIMAL(20, 5)
    },
    field4: {
      type: DataTypes.CHAR
    },
    field5: {
      type: DataTypes.CHAR
    },
    onSpecial: {
      type: DataTypes.BOOLEAN
    },
    onAuction: {
      type: DataTypes.BOOLEAN
    },
    buyable: {
      type: DataTypes.BOOLEAN
    },
    baseItemId: {
      type: DataTypes.UUIDV4
    },
    startDate: {
      type: DataTypes.DATE
    },
    endDate: {
      type: DataTypes.DATE
    },
    availabilityDate: {
      type: DataTypes.DATE
    },
    lastOrderDate: {
      type: DataTypes.DATE
    },
    endOfServiceDate: {
      type: DataTypes.DATE
    },
    disContinueDate: {
      type: DataTypes.DATE
    },
    upMfName: {
      type: DataTypes.CHAR(64)
    },
    upMfPartNumber: {
      type: DataTypes.CHAR(64)
    },
    upPartNumber: {
      type: DataTypes.CHAR(64)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000064',
        unique: true,
        fields: ['partNumber', 'memberId']
      },
      {
        name: 'I0000065',
        fields: ['id', 'deleted']
      },
      {
        name: 'I0000305',
        fields: ['buyable', 'id', 'catEntTypeId']
      },
      {
        name: 'I0000518',
        fields: ['catEntTypeId']
      },
      {
        name: 'I0000519',
        fields: ['memberId']
      },
      {
        name: 'I263103',
        fields: ['id', 'catEntTypeId']
      },
      {
        name: 'I263121',
        fields: ['itemSpcId']
      },
      {
        name: 'I263122',
        fields: ['baseItemId']
      },
      {
        name: 'IPF00003',
        fields: ['upPartNumber']
      },
      {
        name: 'IPF00020',
        fields: ['upMfName']
      },
      {
        name: 'IPF00021',
        fields: ['upMfPartNumber']
      }
    ]
  });

  CatEntry.associate = models => {
    // F_203
    CatEntry.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    // F_395
    CatEntry.hasMany(models.Inventory, {
      foreignKey: 'catEntryId',
      sourceKey: 'id'
    });

    // F_205
    CatEntry.hasOne(models.CatEntShip, {
      foreignKey: 'catEntryId',
      sourceKey: 'id'
    });

    // F_201
    CatEntry.belongsTo(models.ItemSpc, {
      foreignKey: 'itemSpcId',
      targetKey: 'id'
    });

    // F_202
    CatEntry.belongsTo(models.BaseItem, {
      foreignKey: 'baseItemId',
      targetKey: 'id'
    });

    // F_204
    CatEntry.belongsTo(models.CatEntType, {
      foreignKey: 'catEntTypeId',
      targetKey: 'id'
    });
  };

  return CatEntry;
};
