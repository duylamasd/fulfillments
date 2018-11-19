'use strict';

module.exports = (sequelize, DataTypes) => {
  let BuyerPoType = sequelize.define('BuyerPoType', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  BuyerPoType.associate = models => {
    // F_135
    BuyerPoType.hasMany(models.BuyerPo, {
      foreignKey: 'buyerPoTypeId',
      sourceKey: 'id'
    });
  };

  return BuyerPoType;
};
