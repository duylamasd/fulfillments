'use strict';

module.exports = (sequelize, DataTypes) => {
  let TxCdScheme = sequelize.define('TxCdScheme', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(254)
    },
    vendor: {
      type: DataTypes.STRING(32)
    },
    software: {
      type: DataTypes.STRING(32)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000259',
        unique: true,
        fields: ['vendor', 'software']
      }
    ]
  });

  TxCdScheme.associate = models => {
    // F_886
    TxCdScheme.hasMany(models.TxCdClass, {
      foreignKey: 'txCdSchemeId',
      sourceKey: 'id'
    });
  };

  return TxCdScheme;
};
