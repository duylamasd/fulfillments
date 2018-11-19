'use strict';

module.exports = (sequelize, DataTypes) => {
  let EmlMsg = sequelize.define('EmlMsg', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    jspPath: {
      type: DataTypes.STRING(254)
    },
    name: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(254)
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    emlBodyType: {
      type: DataTypes.ENUM,
      values: [0, 1],
      allowNull: false,
      defaultValue: 0
    },
    upName: {
      type: DataTypes.STRING(254)
    },
    upDescription: {
      type: DataTypes.STRING(254)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000288',
        unique: true,
        fields: ['storeEntId', 'name']
      },
      {
        name: 'IPF00004',
        fields: ['upName']
      },
      {
        name: 'IPF00005',
        fields: ['upDescription']
      }
    ]
  });

  EmlMsg.associate = models => {
    // F_973
    EmlMsg.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_957
    EmlMsg.hasMany(models.EmlPromo, {
      foreignKey: 'emlMsgId',
      sourceKey: 'id'
    });
  };

  return EmlMsg;
};
