'use strict';

module.exports = (sequelize, DataTypes) => {
  let ItemType = sequelize.define('ItemType', {
    id: {
      type: DataTypes.ENUM,
      values: ['ITEM', 'DNKT', 'STKT'],
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(254)
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  ItemType.associate = models => {
    // F_106
    ItemType.hasMany(models.BaseItem, {
      foreignKey: 'itemTypeId',
      sourceKey: 'id'
    });
  };

  return ItemType;
};
