'use strict';

module.exports = (sequelize, DataTypes) => {
  let TxCdClass = sequelize.define('TxCdClass', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(64)
    },
    txCdSchemeId: {
      type: DataTypes.UUIDV4
    },
    description: {
      type: DataTypes.STRING(254)
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000258',
        unique: true,
        fields: ['storeEntId', 'name']
      }
    ]
  });

  TxCdClass.associate = models => {
    // F_885
    TxCdClass.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_886
    TxCdClass.belongsTo(models.TxCdScheme, {
      foreignKey: 'txCdSchemeId',
      targetKey: 'id'
    });

    // F_153
    TxCdClass.hasMany(models.CalCode, {
      foreignKey: 'txCdClassId',
      sourceKey: 'id'
    });
  };

  return TxCdClass;
};
