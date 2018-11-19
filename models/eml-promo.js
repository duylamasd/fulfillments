'use strict';

module.exports = (sequelize, DataTypes) => {
  let EmlPromo = sequelize.define('EmlPromo', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    status: {
      type: DataTypes.ENUM,
      values: [0, 1, 2],
      allowNull: false,
      defaultValue: 0
    },
    modifiedBy: {
      type: DataTypes.STRING(254)
    },
    description: {
      type: DataTypes.STRING(254)
    },
    name: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    emlMsgId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    sccJobRefNum: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    replyTo: {
      type: DataTypes.STRING(256)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000339',
        fields: ['storeEntId']
      },
      {
        name: 'I0000564',
        fields: ['emlMsgId']
      },
      {
        name: 'I0000565',
        fields: ['sccJobRefNum']
      }
    ]
  });

  EmlPromo.associate = models => {
    // F_958
    EmlPromo.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_957
    EmlPromo.belongsTo(models.EmlMsg, {
      foreignKey: 'emlMsgId',
      targetKey: 'id'
    });

    // F_959
    EmlPromo.belongsTo(models.SchConfig, {
      foreignKey: 'sccJobRefNum',
      targetKey: 'id'
    });

    // F_1034
    EmlPromo.hasMany(models.EmlBounced, {
      foreignKey: 'emlPromoId',
      sourceKey: 'id'
    });
  };

  return EmlPromo;
};
