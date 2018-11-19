'use strict';

module.exports = (sequelize, DataTypes) => {
  let EmlBounced = sequelize.define('EmlBounced', {
    emlPromoId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    usersId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    statusCode: {
      type: DataTypes.STRING(10)
    },
    lastBounce: {
      type: DataTypes.DATE
    },
    lastRetry: {
      type: DataTypes.DATE
    },
    retryCount: {
      type: DataTypes.SMALLINT
    },
    maxRetryHit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    emlAddrIndex: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    emailAddress: {
      type: DataTypes.STRING(256)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000378',
        fields: ['usersId']
      },
      {
        name: 'I0000379',
        fields: ['emlPromoId']
      },
      {
        name: 'I0000380',
        fields: ['storeEntId']
      }
    ]
  });

  EmlBounced.associate = models => {
    // F_1036
    EmlBounced.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_1034
    EmlBounced.belongsTo(models.EmlPromo, {
      foreignKey: 'emlPromoId',
      targetKey: 'id'
    });

    // F_1035
    EmlBounced.belongsTo(models.Users, {
      foreignKey: 'usersId',
      targetKey: 'id'
    });
  };

  return EmlBounced;
};
