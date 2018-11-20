'use strict';

module.exports = (sequelize, DataTypes) => {
  let ChargeType = sequelize.define('ChargeType', {
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
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    displayAggregated: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000071',
        unique: true,
        fields: ['storeEntId', 'code']
      }
    ]
  });

  ChargeType.associate = models => {
    // F_233
    ChargeType.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });
  };

  return ChargeType;
};
