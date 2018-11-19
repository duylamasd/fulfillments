'use strict';

module.exports = (sequelize, DataTypes) => {
  let ItemSpc = sequelize.define('ItemSpc', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    memberId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    baseItemId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    discontinued: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    partNumber: {
      type: DataTypes.STRING(64),
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000138',
        unique: true,
        fields: ['partNumber', 'memberId']
      },
      {
        name: 'I0000139',
        fields: ['baseItemId', 'id']
      },
      {
        name: 'I0000361',
        fields: ['id', 'baseItemId', 'partNumber']
      },
      {
        name: 'I0000599',
        fields: ['memberId']
      },
      {
        name: 'I800140',
        fields: ['discontinued']
      }
    ]
  });

  ItemSpc.associate = models => {
    // F_201
    ItemSpc.hasMany(models.CatEntry, {
      foreignKey: 'itemSpcId',
      sourceKey: 'id'
    });

    // F_406
    ItemSpc.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    // F_407
    ItemSpc.belongsTo(models.BaseItem, {
      foreignKey: 'baseItemId',
      targetKey: 'id'
    });
  };

  return ItemSpc;
};
