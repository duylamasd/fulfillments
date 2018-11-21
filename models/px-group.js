'use strict';

module.exports = (sequelize, DataTypes) => {
  let PxGroup = sequelize.define('PxGroup', {
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
      defaultValue: 1
    },
    grpName: {
      type: DataTypes.STRING(128),
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
        name: 'I0000386',
        unique: true,
        fields: ['storeEntId', 'grpName']
      },
      {
        name: 'I0000394',
        fields: ['storeEntId']
      }
    ]
  });

  PxGroup.associate = models => {
    // F_1042
    PxGroup.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_1046
    PxGroup.hasMany(models.PxPromotion, {
      foreignKey: 'pxGroupId',
      sourceKey: 'id'
    });
  };

  return PxGroup;
};
