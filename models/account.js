'use strict';

module.exports = (sequelize, DataTypes) => {
  let Account = sequelize.define('Account', {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    memberId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    storeId: {
      type: DataTypes.UUIDV4
    },
    state: {
      type: DataTypes.ENUM,
      values: [0, 3, 6],
      allowNull: false,
      defaultValue: 0
    },
    currency: {
      type: DataTypes.CHAR(3)
    },
    defaultContract: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    comments: {
      type: DataTypes.STRING(4000)
    },
    timeActivated: {
      type: DataTypes.DATE
    },
    prcPlcyPref: {
      type: DataTypes.STRING(32)
    },
    usePrcPlcyPref: {
      type: DataTypes.ENUM,
      values: [0, 1]
    },
    upName: {
      type: DataTypes.STRING(200)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000005',
        unique: true,
        fields: ['name', 'memberId']
      },
      {
        name: 'I0000434',
        fields: ['memberId']
      },
      {
        name: 'I0000435',
        fields: ['storeId']
      },
      {
        name: 'IPF00027',
        fields: ['upName']
      }
    ]
  });

  Account.associate = models => {
    // F_22
    Account.belongsTo(models.Trading, {
      foreignKey: 'id',
      targetKey: 'id'
    });

    // F_23
    Account.belongsTo(models.Store, {
      foreignKey: 'storeId',
      targetKey: 'id'
    });

    // F_24
    Account.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    // F_137
    Account.hasMany(models.BuyerPo, {
      foreignKey: 'accountId',
      sourceKey: 'id'
    });
  };

  return Account;
};
