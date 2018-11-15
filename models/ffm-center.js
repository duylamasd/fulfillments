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
    FfmCenter.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    FfmCenter.hasMany(models.Store, {
      foreignKey: 'ffmCenterId',
      sourceKey: 'id'
    });

    FfmCenter.hasMany(models.Store, {
      foreignKey: 'rtnFfmCtrId',
      sourceKey: 'id'
    });
  };

  return FfmCenter;
};
