'use strict';

module.exports = (sequelize, DataTypes) => {
  let BuyerPo = sequelize.define('BuyerPo', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    setcCurr: {
      type: DataTypes.CHAR(3)
    },
    accountId: {
      type: DataTypes.UUIDV4
    },
    poNumber: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    buyerPoTypeId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    state: {
      type: DataTypes.ENUM,
      values: [0, 1, 2],
      defaultValue: 0
    },
    amount: {
      type: DataTypes.DECIMAL(20, 5)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000488',
        fields: ['accountId']
      },
      {
        name: 'I0000489',
        fields: ['buyerPoTypeId']
      }
    ]
  });

  BuyerPo.associate = models => {
    // F_135
    BuyerPo.belongsTo(models.BuyerPoType, {
      foreignKey: 'buyerPoTypeId',
      targetKey: 'id'
    });

    // F_136
    BuyerPo.belongsTo(models.SetcCurr, {
      foreignKey: 'setcCurr',
      targetKey: 'setcCurr'
    });

    // F_137
    BuyerPo.belongsTo(models.Account, {
      foreignKey: 'accountId',
      targetKey: 'id'
    });

    // F_9004
    BuyerPo.hasMany(models.Orders, {
      foreignKey: 'buyerPoId',
      sourceKey: 'id'
    });
  };

  return BuyerPo;
};
