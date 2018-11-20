'use strict';

module.exports = (sequelize, DataTypes) => {
  let CalMethod = sequelize.define('CalMethod', {
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
    calUsageId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    taskName: {
      type: DataTypes.STRING(254)
    },
    description: {
      type: DataTypes.STRING(508)
    },
    subClass: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(254)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000055',
        unique: true,
        fields: ['subClass', 'calUsageId', 'storeEntId', 'name']
      },
      {
        name: 'I0000501',
        fields: ['storeEntId']
      },
      {
        name: 'I0000502',
        fields: ['calUsageId']
      }
    ]
  });

  CalMethod.associate = models => {
    // F_163
    CalMethod.belongsTo(models.CalUsage, {
      foreignKey: 'calUsageId',
      targetKey: 'id'
    });

    // F_164
    CalMethod.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_154
    CalMethod.hasMany(models.CalCode, {
      foreignKey: 'calMethodIdQfy',
      sourceKey: 'id'
    });

    // F_155
    CalMethod.hasMany(models.CalCode, {
      foreignKey: 'calMethodId',
      sourceKey: 'id'
    });

    // F_156
    CalMethod.hasMany(models.CalCode, {
      foreignKey: 'calMethodIdApp',
      sourceKey: 'id'
    });

    // F_179
    CalMethod.hasMany(models.CalScale, {
      foreignKey: 'calMethodId',
      sourceKey: 'id'
    });
  };

  return CalMethod;
};
