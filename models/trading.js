'use strict';

module.exports = (sequelize, DataTypes) => {
  let Trading = sequelize.define('Trading', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    trdTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    accountId: {
      type: DataTypes.UUIDV4
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    referenceCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    startTime: {
      type: DataTypes.DATE
    },
    endTime: {
      type: DataTypes.DATE
    },
    creditAllowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    refTradingId: {
      type: DataTypes.UUIDV4
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000815',
        fields: ['trdTypeId']
      }
    ]
  });

  Trading.associate = models => {
    // F_252
    Trading.belongsTo(models.Contract, {
      foreignKey: 'id',
      targetKey: 'id'
    });

    // F_866
    Trading.belongsTo(models.TrdType, {
      foreignKey: 'trdTypeId',
      targetKey: 'id'
    });

    // F_22
    Trading.hasOne(models.Account, {
      foreignKey: 'id',
      sourceKey: 'id'
    });
  };

  return Trading;
};
