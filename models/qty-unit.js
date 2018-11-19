'use strict';

module.exports = (sequelize, DataTypes) => {
  let QtyUnit = sequelize.define('QtyUnit', {
    id: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true
    },
    field1: {
      type: DataTypes.STRING(254)
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  QtyUnit.associate = models => {
    // F_107
    QtyUnit.hasMany(models.BaseItem, {
      foreignKey: 'quantityMeasure',
      sourceKey: 'id'
    });

    // F_206
    QtyUnit.hasMany(models.CatEntShip, {
      foreignKey: 'quantityMeasure',
      sourceKey: 'id'
    });

    // F_207
    QtyUnit.hasMany(models.CatEntShip, {
      foreignKey: 'sizeMeasure',
      sourceKey: 'id'
    });

    // F_208
    QtyUnit.hasMany(models.CatEntShip, {
      foreignKey: 'weightMeasure',
      sourceKey: 'id'
    });

    // F_394
    QtyUnit.hasMany(models.Inventory, {
      foreignKey: 'quantityMeasure',
      sourceKey: 'id'
    });
  };

  return QtyUnit;
};
