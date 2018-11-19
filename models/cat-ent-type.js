'use strict';

module.exports = (sequelize, DataTypes) => {
  let CatEntType = sequelize.define('CatEntType', {
    id: {
      type: DataTypes.STRING(16),
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

  CatEntType.associate = models => {
    // F_204
    CatEntType.hasMany(models.CatEntry, {
      foreignKey: 'catEntTypeId',
      sourceKey: 'id'
    });
  };

  return CatEntType;
};
