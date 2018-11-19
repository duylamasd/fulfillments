'use strict';

module.exports = (sequelize, DataTypes) => {
  let StoreGrp = sequelize.define('StoreGrp', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    fields1: {
      type: DataTypes.CHAR(254)
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  StoreGrp.associate = models => {
    // F_774
    StoreGrp.hasMany(models.Store, {
      foreignKey: 'storeGrpId',
      sourceKey: 'id'
    });

    // F_795
    StoreGrp.hasOne(models.StoreEnt, {
      foreignKey: 'id',
      sourceKey: 'id'
    });
  };

  return StoreGrp;
};
