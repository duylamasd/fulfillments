'use strict';

module.exports = (sequelize, DataTypes) => {
  let Shelf = sequelize.define('Shelf', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    whId: {
      type: DataTypes.UUID,
      primaryKey: true
    },
  }, {
    timestamps: true,
    freezeTableName: true
  });

  Shelf.associate = models => {
    Shelf.belongsTo(models.Warehouses, {
      foreignKey: 'whId',
      sourceKey: 'id'
    });
  };

  return Shelf;
};
