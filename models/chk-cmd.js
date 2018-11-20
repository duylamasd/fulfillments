'use strict';

module.exports = (sequelize, DataTypes) => {
  let ChkCmd = sequelize.define('ChkCmd', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    displayName: {
      type: DataTypes.STRING(254)
    },
    interfaceName: {
      type: DataTypes.STRING(254)
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  ChkCmd.associate = models => {
    // F_236
    ChkCmd.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });
  };

  return ChkCmd;
};
