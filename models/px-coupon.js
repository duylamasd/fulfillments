'use strict';

module.exports = (sequelize, DataTypes) => {
  let PxCoupon = sequelize.define('PxCoupon', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    usersId: {
      type: DataTypes.UUIDV4
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    effective: {
      type: DataTypes.DATE,
      allowNull: false
    },
    expire: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: [0, 1, 2, 3, 4],
      allowNull: false,
      defaultValue: 0
    },
    ordersId: {
      type: DataTypes.UUIDV4
    },
    guestId: {
      type: DataTypes.STRING(128)
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(128)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000389',
        fields: ['storeEntId', 'name', 'version']
      },
      {
        name: 'I0000390',
        fields: ['ordersId', 'usersId']
      },
      {
        name: 'I0000391',
        fields: ['ordersId', 'guestId']
      },
      {
        name: 'I0000404',
        fields: ['storeEntId']
      },
      {
        name: 'I0000405',
        fields: ['usersId']
      },
      {
        name: 'I0000406',
        fields: ['ordersId']
      }
    ]
  });

  PxCoupon.associate = models => {
    // F_1052
    PxCoupon.belongsTo(models.Users, {
      foreignKey: 'usersId',
      targetKey: 'id'
    });

    // F_1053
    PxCoupon.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_1054
    PxCoupon.belongsTo(models.Orders, {
      foreignKey: 'ordersId',
      targetKey: 'id'
    });
  };

  return PxCoupon;
};
