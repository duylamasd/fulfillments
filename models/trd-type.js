'use strict';

module.exports = (sequelize, DataTypes) => {
  let TrdType = sequelize.define('TrdType', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  TrdType.associate = models => {
    // F_866
    TrdType.hasMany(models.Trading, {
      foreignKey: 'trdTypeId',
      sourceKey: 'id'
    });
  };

  return TrdType;
};
