'use strict';

module.exports = (sequelize, DataTypes) => {
  let Campaign = sequelize.define('Campaign', {
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
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(254)
    },
    field1: {
      type: DataTypes.STRING(254)
    },
    lastUpdatedBy: {
      type: DataTypes.UUIDV4
    },
    owner: {
      type: DataTypes.STRING(64)
    },
    objective: {
      type: DataTypes.STRING(254)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000060',
        unique: true,
        fields: ['name', 'storeEntId']
      },
      {
        name: 'I0000511',
        fields: ['storeEntId']
      }
    ]
  });

  Campaign.associate = models => {
    // F_182
    Campaign.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_1047
    Campaign.hasMany(models.PxPromotion, {
      foreignKey: 'campaignId',
      sourceKey: 'id'
    });
  };

  return Campaign;
};
