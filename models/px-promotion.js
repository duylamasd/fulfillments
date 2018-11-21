'use strict';

module.exports = (sequelize, DataTypes) => {
  let PxPromotion = sequelize.define('PxPromotion', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    priority: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.ENUM,
      values: [0, 1, 2, 3, 4, 5, 6],
      allowNull: false
    },
    exclusive: {
      type: DataTypes.ENUM,
      values: [0, 1, 2, 3, 4],
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      values: [0, 1],
      allowNull: false
    },
    perOrdLmt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1
    },
    perShopPerLmt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1
    },
    totalLmt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1
    },
    pxGroupId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    campaignId: {
      type: DataTypes.UUIDV4
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    revision: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    effective: {
      type: DataTypes.INTEGER
    },
    transfer: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    codeRequired: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    expire: {
      type: DataTypes.INTEGER
    },
    lastUpdatedBy: {
      type: DataTypes.UUIDV4
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    targetSales: {
      type: DataTypes.DECIMAL(20, 5)
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    code: {
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
        name: 'I0000388',
        unique: true,
        fields: ['storeEntId', 'name', 'version', 'status', 'revision']
      },
      {
        name: 'I0000398',
        fields: ['pxGroupId']
      },
      {
        name: 'I0000399',
        fields: ['campaignId']
      },
      {
        name: 'I0000400',
        fields: ['storeEntId']
      }
    ]
  });

  PxPromotion.associate = models => {
    // F_1046
    PxPromotion.belongsTo(models.PxGroup, {
      foreignKey: 'pxGroupId',
      targetKey: 'id'
    });

    // F_1047
    PxPromotion.belongsTo(models.Campaign, {
      foreignKey: 'campaignId',
      targetKey: 'id'
    });

    // F_1048
    PxPromotion.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });
  };

  return PxPromotion;
};
