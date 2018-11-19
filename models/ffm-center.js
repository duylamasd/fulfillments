'use strict';

module.exports = (sequelize, DataTypes) => {
  let FfmCenter = sequelize.define('FfmCenter', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    memberId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    },
    defaultShipOffset: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 86400
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    extFfmStoreNum: {
      type: DataTypes.STRING(128)
    },
    inventoryOpFlags: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    maxNumPick: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 25
    },
    pickDelayInMin: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 5
    },
    dropShip: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['Y', 'N'],
      defaultValue: 'N'
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000101',
        unique: true,
        fields: ['memberId', 'name']
      }
    ]
  });

  FfmCenter.associate = models => {
    // F_317
    FfmCenter.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    // F_776
    FfmCenter.hasMany(models.Store, {
      foreignKey: 'ffmCenterId',
      sourceKey: 'id'
    });

    // F_772
    FfmCenter.hasMany(models.Store, {
      foreignKey: 'rtnFfmCtrId',
      sourceKey: 'id'
    });

    // F_396
    FfmCenter.hasMany(models.Inventory, {
      foreignKey: 'ffmCenterId',
      sourceKey: 'id'
    });

    // F_316
    FfmCenter.hasMany(models.FfmCentDs, {
      foreignKey: 'ffmCenterId',
      sourceKey: 'id'
    });

    // F_1092
    FfmCenter.hasMany(models.OrdRelease, {
      foreignKey: 'ffmCenterId',
      sourceKey: 'id'
    });

    // F_586
    FfmCenter.hasMany(models.PickBatch, {
      foreignKey: 'ffmCenterId',
      sourceKey: 'id'
    });
  };

  return FfmCenter;
};
