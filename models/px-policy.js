'use strict';

module.exports = (sequelize, DataTypes) => {
  let PxPolicy = sequelize.define('PxPolicy', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: [0, 1, 2],
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    implCls: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    xmlParam: {
      type: DataTypes.TEXT('long')
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000387',
        unique: true,
        fields: ['storeEntId', 'name']
      },
      {
        name: 'I0000395',
        fields: ['storeEntId']
      }
    ]
  });

  PxPolicy.associate = models => {
    // F_1043
    PxPolicy.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });
  };

  return PxPolicy;
};
