'use strict';

module.exports = (sequelize, DataTypes) => {
  let CalUsage = sequelize.define('CalUsage', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(254)
    },
    stRelTypNameCfg: {
      type: DataTypes.STRING(60)
    },
    stRelTypNameRt: {
      type: DataTypes.STRING(64)
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  CalUsage.associate = models => {
    // F_151
    CalUsage.hasMany(models.CalCode, {
      foreignKey: 'calUsageId',
      sourceKey: 'id'
    });

    // F_163
    CalUsage.hasMany(models.CalMethod, {
      foreignKey: 'calUsageId',
      sourceKey: 'id'
    });

    // F_176
    CalUsage.hasMany(models.CalScale, {
      foreignKey: 'calUsageId',
      sourceKey: 'id'
    });
  };

  return CalUsage;
};
