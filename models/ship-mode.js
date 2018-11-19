'use strict';

module.exports = (sequelize, DataTypes) => {
  let ShipMode = sequelize.define('ShipMode', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    field1: {
      type: DataTypes.STRING(254)
    },
    field2: {
      type: DataTypes.INTEGER
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    code: {
      type: DataTypes.CHAR(30)
    },
    carrier: {
      type: DataTypes.CHAR(30)
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000228',
        unique: true,
        fields: ['storeEntId', 'code', 'carrier']
      }
    ]
  });

  ShipMode.associate = models => {
    // F_745
    ShipMode.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_1091
    ShipMode.hasMany(models.OrdRelease, {
      foreignKey: 'shipModeId',
      sourceKey: 'id'
    });
  };

  return ShipMode;
};
