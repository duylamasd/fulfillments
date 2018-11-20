'use strict';

module.exports = (sequelize, DataTypes) => {
  let Orders = sequelize.define('Orders', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    ormOrder: {
      type: DataTypes.CHAR(30)
    },
    orgEntityId: {
      type: DataTypes.UUIDV4
    },
    totalProduct: {
      type: DataTypes.DECIMAL(20, 5),
      defaultValue: 0
    },
    totalTax: {
      type: DataTypes.DECIMAL(20, 5),
      defaultValue: 0
    },
    totalShipping: {
      type: DataTypes.DECIMAL(20, 5),
      defaultValue: 0
    },
    totalTaxShipping: {
      type: DataTypes.DECIMAL(20, 5),
      defaultValue: 0
    },
    description: {
      type: DataTypes.STRING(254)
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    currency: {
      type: DataTypes.CHAR(10)
    },
    timePlaced: {
      type: DataTypes.DATE
    },
    sequence: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.STRING(3)
    },
    memberId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    field1: {
      type: DataTypes.INTEGER
    },
    field2: {
      type: DataTypes.DECIMAL(20, 5)
    },
    field3: {
      type: DataTypes.STRING(254)
    },
    addressId: {
      type: DataTypes.UUIDV4
    },
    totalAdjustment: {
      type: DataTypes.DECIMAL(20, 5),
      defaultValue: 0
    },
    comments: {
      type: DataTypes.STRING(254)
    },
    notificationId: {
      type: DataTypes.UUIDV4
    },
    type: {
      type: DataTypes.CHAR(3)
    },
    editorId: {
      type: DataTypes.UUIDV4
    },
    busChnId: {
      type: DataTypes.UUIDV4
    },
    sourceId: {
      type: DataTypes.UUIDV4
    },
    expireDate: {
      type: DataTypes.DATE
    },
    blocked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    opSystemId: {
      type: DataTypes.UUIDV4
    },
    transferStatus: {
      type: DataTypes.ENUM,
      values: [0, 1, 2]
    },
    buyerPoId: {
      type: DataTypes.UUIDV4
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000176',
        fields: ['memberId', 'status', 'storeEntId']
      },
      {
        name: 'I0000652',
        fields: ['addressId']
      },
      {
        name: 'I0000653',
        fields: ['orgEntityId']
      },
      {
        name: 'I0000654',
        fields: ['storeEntId']
      },
      {
        name: 'I0000892',
        fields: ['editorId']
      },
      {
        name: 'I0000933',
        fields: ['sourceId']
      },
      {
        name: 'I0001267',
        fields: ['buyerPoId']
      },
      {
        type: 'I0001508',
        fields: ['status', 'updatedAt']
      },
      {
        type: 'I173124',
        fields: ['timePlaced']
      }
    ]
  });

  Orders.associate = models => {
    // F_1138
    Orders.belongsTo(models.Member, {
      foreignKey: 'editorId',
      targetKey: 'id'
    });

    // F_1176
    Orders.belongsTo(models.BusChn, {
      foreignKey: 'busChnId',
      targetKey: 'id'
    });

    // F_516
    Orders.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    // F_517
    Orders.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_1054
    Orders.hasMany(models.PxCoupon, {
      foreignKey: 'ordersId',
      sourceKey: 'id'
    });

    // F_513
    Orders.belongsTo(models.OrgEntity, {
      foreignKey: 'orgEntityId',
      targetKey: 'id'
    });

    // F_515
    Orders.belongsTo(models.Address, {
      foreignKey: 'addressId',
      targetKey: 'id'
    });

    // F_9004
    Orders.belongsTo(models.BuyerPo, {
      foreignKey: 'buyerPoId',
      targetKey: 'id'
    });

    // R_3455
    Orders.belongsTo(models.OpSystem, {
      foreignKey: 'opSystemId',
      targetKey: 'id'
    });

    // F_1057
    Orders.hasMany(models.PxUsage, {
      foreignKey: 'ordersId',
      sourceKey: 'id'
    });

    // F_547
    Orders.hasMany(models.OrdRelease, {
      foreignKey: 'ordersId',
      sourceKey: 'id'
    });
  };

  return Orders;
};
