'use strict';

module.exports = (sequelize, DataTypes) => {
  let BusChn = sequelize.define('BusChn', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.ENUM,
      values: [
        'Web Channel',
        'Physical Store',
        'Klosk',
        'Telesales',
        'B2B External',
        'HTTP Device'
      ],
      allowNull: false
    },
    state: {
      type: DataTypes.ENUM,
      values: ['E', 'D'],
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  BusChn.associate = models => {
    // F_1176
    BusChn.hasMany(models.Orders, {
      foreignKey: 'busChnId',
      sourceKey: 'id'
    });
  };

  return BusChn;
};
