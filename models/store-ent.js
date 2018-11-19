'use strict';

module.exports = (sequelize, DataTypes) => {
  let StoreEnt = sequelize.define('StoreEnt', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    memberId: {
      type: DataTypes.UUIDV4
    },
    type: {
      type: DataTypes.ENUM,
      values: ['G', 'S'],
      defaultValue: 'G',
      allowNull: false
    },
    setcCurr: {
      type: DataTypes.STRING(3)
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000787',
        unique: false,
        fields: ['memberId']
      },
      {
        name: 'I0000240',
        unique: true,
        fields: ['identifier', 'memberId']
      }
    ]
  });

  StoreEnt.associate = models => {
    // F_790
    StoreEnt.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    // F_775
    StoreEnt.hasOne(models.Store, {
      foreignKey: 'id',
      sourceKey: 'id'
    });

    // F_789
    StoreEnt.belongsTo(models.SetcCurr, {
      foreignKey: 'setcCurr',
      targetKey: 'setcCurr'
    });

    // F_795
    StoreEnt.belongsTo(models.StoreGrp, {
      foreignKey: 'id',
      targetKey: 'id'
    });

    // F_1015
    StoreEnt.hasMany(models.MsgArchive, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_1025
    StoreEnt.hasMany(models.MsgStore, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_1036
    StoreEnt.hasMany(models.EmlBounced, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_958
    StoreEnt.hasMany(models.EmlPromo, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_973
    StoreEnt.hasMany(models.EmlMsg, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_737
    StoreEnt.hasMany(models.SchConfig, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_1039
    StoreEnt.hasMany(models.EmlStrPlcy, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_1042
    StoreEnt.hasMany(models.PxGroup, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_1043
    StoreEnt.hasMany(models.PxPolicy, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_1048
    StoreEnt.hasMany(models.PxPromotion, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_182
    StoreEnt.hasMany(models.Campaign, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_1053
    StoreEnt.hasMany(models.PxCoupon, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_517
    StoreEnt.hasMany(models.Orders, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_1056
    StoreEnt.hasMany(models.PxUsage, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_1081
    StoreEnt.hasMany(models.PxTemplate, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_1088
    StoreEnt.hasMany(models.OrdRelease, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_745
    StoreEnt.hasMany(models.ShipMode, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_1102
    StoreEnt.hasMany(models.AtchTgt, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_1107
    StoreEnt.hasMany(models.AtchAst, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });

    // F_1232
    StoreEnt.hasMany(models.PrcOrsn, {
      foreignKey: 'storeEntId',
      sourceKey: 'id'
    });
  };

  return StoreEnt;
};
