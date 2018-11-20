'use strict';

module.exports = (sequelize, DataTypes) => {
  let BaseItem = sequelize.define('BaseItem', {
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
    itemTypeId: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    quantityMeasure: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: 'C62'
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    partNumber: {
      type: DataTypes.STRING(72),
      allowNull: false
    },
    quantityMultiple: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 1.0
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000040',
        unique: true,
        fields: ['memberId', 'partNumber']
      }
    ]
  });

  BaseItem.associate = models => {
    // F_108
    BaseItem.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    // F_407
    BaseItem.hasMany(models.ItemSpc, {
      foreignKey: 'baseItemId',
      sourceKey: 'id'
    });

    // F_202
    BaseItem.hasMany(models.CatEntry, {
      foreignKey: 'baseItemId',
      sourceKey: 'id'
    });

    // F_107
    BaseItem.belongsTo(models.QtyUnit, {
      foreignKey: 'quantityMeasure',
      targetKey: 'id'
    });

    // F_106
    BaseItem.belongsTo(models.ItemType, {
      foreignKey: 'itemTypeId',
      targetKey: 'id'
    });
  };

  return BaseItem;
};
