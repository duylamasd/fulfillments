'use strict';

module.exports = (sequelize, DataTypes) => {
  let CalCode = sequelize.define('CalCode', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    calUsageId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    groupBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    txCdClassId: {
      type: DataTypes.UUIDV4
    },
    published: {
      type: DataTypes.ENUM,
      values: [0, 1, 2],
      allowNull: false,
      defaultValue: 0
    },
    sequence: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    calMethodId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    calMethodIdApp: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    calMethodIdQfy: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    field1: {
      type: DataTypes.STRING(254)
    },
    description: {
      type: DataTypes.STRING(254)
    },
    displayLevel: {
      type: DataTypes.ENUM,
      values: [0, 1, 2, 3, 4],
      allowNull: false,
      defaultValue: 0
    },
    startDate: {
      type: DataTypes.DATE
    },
    endDate: {
      type: DataTypes.DATE
    },
    flags: {
      type: DataTypes.ENUM,
      values: [0, 1],
      allowNull: false,
      defaultValue: 0
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000054',
        unique: true,
        fields: ['calUsageId', 'code', 'storeEntId']
      },
      {
        name: 'I0000495',
        fields: ['calMethodIdApp']
      },
      {
        name: 'I0000496',
        fields: ['calMethodId']
      },
      {
        name: 'I0000497',
        fields: ['calMethodIdQfy']
      },
      {
        name: 'I0000498',
        fields: ['storeEntId']
      },
      {
        name: 'I0001247',
        fields: ['txCdClassId']
      }
    ]
  });

  CalCode.associate = models => {
    // F_151
    CalCode.belongsTo(models.CalUsage, {
      foreignKey: 'calUsageId',
      targetKey: 'id'
    });

    // F_152
    CalCode.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_153
    CalCode.belongsTo(models.TxCdClass, {
      foreignKey: 'txCdClassId',
      targetKey: 'id'
    });

    // F_154
    CalCode.belongsTo(models.CalMethod, {
      foreignKey: 'calMethodIdQfy',
      targetKey: 'id'
    });

    // F_155
    CalCode.belongsTo(models.CalMethod, {
      foreignKey: 'calMethodId',
      targetKey: 'id'
    });

    // F_156
    CalCode.belongsTo(models.CalMethod, {
      foreignKey: 'calMethodIdApp',
      targetKey: 'id'
    });
  };

  return CalCode;
};
