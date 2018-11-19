'use strict';

module.exports = (sequelize, DataTypes) => {
  let PxUsage = sequelize.define('PxUsage', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    ordersId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    usersId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    guestId: {
      type: DataTypes.STRING(256)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000392',
        fields: ['storeEntId', 'name', 'version']
      },
      {
        name: 'I0000393',
        fields: ['guestId']
      },
      {
        name: 'I0000407',
        fields: ['usersId']
      },
      {
        name: 'I0000408',
        fields: ['ordersId']
      },
      {
        name: 'I0000409',
        fields: ['storeEntId']
      }
    ]
  });

  PxUsage.associate = models => {
    // F_1055
    PxUsage.belongsTo(models.Users, {
      foreignKey: 'usersId',
      targetKey: 'id'
    });

    // F_1056
    PxUsage.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_1057
    PxUsage.belongsTo(models.Orders, {
      foreignKey: 'ordersId',
      targetKey: 'id'
    });
  };

  return PxUsage;
};
