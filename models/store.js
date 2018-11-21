'use strict';

module.exports = (sequelize, DataTypes) => {
  let Store = sequelize.define('Store', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    storeGrpId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    storeCgryId: {
      type: DataTypes.UUIDV4
    },
    languageId: {
      type: DataTypes.INTEGER
    },
    ffmCenterId: {
      type: DataTypes.UUIDV4
    },
    status: {
      type: DataTypes.ENUM,
      values: [-1, 0, 1],
      defaultValue: 1
    },
    storeLevel: {
      type: DataTypes.STRING(10)
    },
    directory: {
      type: DataTypes.STRING
    },
    quoteGoodFor: {
      type: DataTypes.INTEGER,
      defaultValue: 43200
    },
    field1: {
      type: DataTypes.STRING
    },
    field2: {
      type: DataTypes.STRING
    },
    allocationGoodFor: {
      type: DataTypes.INTEGER,
      defaultValue: 43200,
      allowNull: false
    },
    maxBooffSet: {
      type: DataTypes.INTEGER,
      defaultValue: 7776000,
      allowNull: false
    },
    rejectedOrdExpiry: {
      type: DataTypes.INTEGER,
      defaultValue: 259200
    },
    ffmcSelectionFlags: {
      type: DataTypes.ENUM,
      values: [0, 1, 2],
      defaultValue: 0,
      allowNull: false
    },
    bopmPadFactor: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    rtnFfmCtrId: {
      type: DataTypes.UUIDV4
    },
    defaultBooffSet: {
      type: DataTypes.INTEGER,
      defaultValue: 7776000,
      allowNull: false
    },
    priceRefFlags: {
      type: DataTypes.ENUM,
      values: [0, 1, 2, 4, 8],
      defaultValue: 0,
      allowNull: false
    },
    storeType: {
      type: DataTypes.ENUM,
      values: [
        'B2C', 'BBB', 'B2B', 'CHS', 'CPS', 'RHS', 'BRH',
        'RPS', 'BRP', 'DPS', 'DPX', 'SCP', 'SCS', 'SPS',
        'SHS', 'HCP', 'PBS', 'MHS', 'BMH', 'MPS', 'BMP'
      ]
    },
    rmaGoodFor: {
      type: DataTypes.INTEGER,
      defaultValue: 86400
    },
    avsAcceptCodes: {
      type: DataTypes.STRING(64)
    },
    crtDbyCntrId: {
      type: DataTypes.UUIDV4
    },
    lastUpdateStatus: {
      type: DataTypes.DATE
    },
    allocationOffset: {
      type: DataTypes.INTEGER,
      defaultValue: 86400,
      allowNull: false
    },
    maxFoOffset: {
      type: DataTypes.INTEGER,
      defaultValue: 7776000
    },
    inventoryOpFlag: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: 0
    },
    blockingActive: {
      type: DataTypes.SMALLINT,
      defaultValue: 1
    },
    blkextAsynch: {
      type: DataTypes.SMALLINT,
      defaultValue: 0,
      allowNull: false
    },
    persistentSession: {
      type: DataTypes.ENUM,
      values: [0, 1, 2, 3]
    },
    orderHistActive: {
      type: DataTypes.ENUM,
      values: ['Y', 'N'],
      defaultValue: 'Y',
      allowNull: false
    },
    inventorySystem: {
      type: DataTypes.ENUM,
      values: [-1, -2, -3, -4, -5],
      defaultValue: -1,
      allowNull: false
    },
    upDirectory: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000778',
        fields: ['ffmCenterId']
      },
      {
        name: 'I0000779',
        fields: ['storeCgryId']
      },
      {
        name: 'I0000780',
        fields: ['rtnFfmCtrId']
      },
      {
        name: 'I0000781',
        fields: ['crtDbyCntrId']
      },
      {
        name: 'I0001288',
        fields: ['storeGrpId']
      },
      {
        name: 'IPF00026',
        fields: ['upDirectory']
      }
    ]
  });

  Store.associate = models => {
    // F_775
    Store.belongsTo(models.StoreEnt, {
      foreignKey: 'id',
      sourceKey: 'id'
    });

    // F_777
    Store.belongsTo(models.Language, {
      foreignKey: 'languageId',
      targetKey: 'id'
    });

    // F_776
    Store.belongsTo(models.FfmCenter, {
      foreignKey: 'ffmCenterId',
      targetKey: 'id'
    });

    // F_772
    Store.belongsTo(models.FfmCenter, {
      foreignKey: 'rtnFfmCtrId',
      targetKey: 'id'
    });

    // F_393
    Store.hasMany(models.Inventory, {
      foreignKey: 'storeId',
      sourceKey: 'id'
    });

    // F_773
    Store.belongsTo(models.StoreCgry, {
      foreignKey: 'storeCgryId',
      targetKey: 'id'
    });

    // F_774
    Store.belongsTo(models.StoreGrp, {
      foreignKey: 'storeGrpId',
      targetKey: 'id'
    });

    // F_925
    Store.belongsTo(models.Contract, {
      foreignKey: 'crtDbyCntrId',
      targetKey: 'id'
    });

    // F_22
    Store.hasMany(models.Account, {
      foreignKey: 'storeId',
      sourceKey: 'id'
    });
  };

  return Store;
};
