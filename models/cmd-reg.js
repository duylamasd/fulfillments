'use strict';

module.exports = (sequelize, DataTypes) => {
  let CmdReg = sequelize.define('CmdReg', {
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    interfaceName: {
      type: DataTypes.STRING(254),
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(254)
    },
    className: {
      type: DataTypes.STRING(254)
    },
    properties: {
      type: DataTypes.STRING(254)
    },
    target: {
      type: DataTypes.STRING(16),
      defaultValue: 'Local'
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  CmdReg.associate = models => {
    // F_243
    CmdReg.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });
  };

  return CmdReg;
};
