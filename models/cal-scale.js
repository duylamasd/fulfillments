'use strict';

module.exports = (sequelize, DataTypes) => {
  let CalScale = sequelize.define('CalScale', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    qtyUnitId: {
      type: DataTypes.STRING(16)
    },
    code: {
      type: DataTypes.STRING(30)
    },
    description: {
      type: DataTypes.STRING(254)
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    calUsageId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    setcCurr: {
      type: DataTypes.CHAR(3)
    },
    calMethodId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    field1: {
      type: DataTypes.STRING(254)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000059',
        unique: true,
        fields: ['calUsageId', 'code', 'storeEntId']
      },
      {
        name: 'I0000508',
        fields: ['calMethodId']
      },
      {
        name: 'I0000509',
        fields: ['storeEntId']
      }
    ]
  });

  CalScale.associate = models => {
    // F_175
    CalScale.belongsTo(models.SetcCurr, {
      foreignKey: 'setcCurr',
      targetKey: 'setcCurr'
    });

    // F_176
    CalScale.belongsTo(models.CalUsage, {
      foreignKey: 'calUsageId',
      targetKey: 'id'
    });

    // F_177
    CalScale.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_178
    CalScale.belongsTo(models.QtyUnit, {
      foreignKey: 'qtyUnitId',
      targetKey: 'id'
    });

    // F_179
    CalScale.belongsTo(models.CalMethod, {
      foreignKey: 'calMethodId',
      targetKey: 'id'
    });
  };

  return CalScale;
};
