'use strict';

module.exports = (sequelize, DataTypes) => {
  let OrdRelease = sequelize.define('OrdRelease', {
    ordReleaseNum: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    ordersId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    ffmAcknowledgement: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.ENUM,
      values: ['NEW', 'RDY', 'SHIP', 'PRN', 'MNF']
    },
    customerConfirm: {
      type: DataTypes.DATE
    },
    field1: {
      type: DataTypes.INTEGER
    },
    field2: {
      type: DataTypes.STRING(254)
    },
    field3: {
      type: DataTypes.STRING(254)
    },
    pickBatchId: {
      type: DataTypes.UUIDV4
    },
    timePlaced: {
      type: DataTypes.DATE
    },
    packSlipSml: {
      type: DataTypes.TEXT('long')
    },
    captureDate: {
      type: DataTypes.DATE
    },
    extOrdNum: {
      type: DataTypes.STRING(64)
    },
    extRef: {
      type: DataTypes.STRING(2048)
    },
    ffmCenterId: {
      type: DataTypes.UUIDV4
    },
    isExpEdited: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    shipModeId: {
      type: DataTypes.UUIDV4
    },
    addressId: {
      type: DataTypes.UUIDV4
    },
    memberId: {
      type: DataTypes.UUIDV4
    },
    storeEntId: {
      type: DataTypes.UUIDV4
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000180',
        fields: ['status', 'ordersId', 'ordReleaseNum', 'pickBatchId']
      },
      {
        name: 'I0000836',
        fields: ['ffmCenterId']
      },
      {
        name: 'I0000837',
        fields: ['shipModeId']
      },
      {
        name: 'I0000838',
        fields: ['addressId']
      },
      {
        name: 'I0000839',
        fields: ['memberId']
      },
      {
        name: 'I0000840',
        fields: ['storeEntId']
      },
      {
        name: 'I803140',
        fields: ['pickBatchId']
      }
    ]
  });

  OrdRelease.removeAttribute('id');

  OrdRelease.associate = models => {
    // F_1088
    OrdRelease.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_1089
    OrdRelease.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    // F_1090
    OrdRelease.belongsTo(models.Address, {
      foreignKey: 'addressId',
      targetKey: 'id'
    });

    // F_1091
    OrdRelease.belongsTo(models.ShipMode, {
      foreignKey: 'shipModeId',
      targetKey: 'id'
    });

    // F_1092
    OrdRelease.belongsTo(models.FfmCenter, {
      foreignKey: 'ffmCenterId',
      targetKey: 'id'
    });

    // F_547
    OrdRelease.belongsTo(models.Orders, {
      foreignKey: 'ordersId',
      targetKey: 'id'
    });

    // F_546
    OrdRelease.belongsTo(models.PickBatch, {
      foreignKey: 'pickBatchId',
      targetKey: 'id'
    });
  };

  return OrdRelease;
};
