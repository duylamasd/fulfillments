'use strict';

module.exports = (sequelize, DataTypes) => {
  let Warehouse = sequelize.define('Warehouses', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  Warehouse.associate = models => {
    Warehouse.hasMany(models.Shelf, {
      foreignKey: 'whId',
      sourceKey: 'id'
    });
  };

  return Warehouse;
};
