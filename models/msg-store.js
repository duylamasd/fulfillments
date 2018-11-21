'use strict';

module.exports = (sequelize, DataTypes) => {
  let MsgStore = sequelize.define('MsgStore', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    messageIndex: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    message: {
      type: DataTypes.BLOB('long')
    },
    retries: {
      type: DataTypes.INTEGER
    },
    expiry: {
      type: DataTypes.DATE
    },
    transportId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000624',
        fields: ['storeEntId']
      }
    ]
  });

  MsgStore.associate = models => {
    // F_1024
    MsgStore.belongsTo(models.Transport, {
      foreignKey: 'transportId',
      targetKey: 'id'
    });

    // F_1025
    MsgStore.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });
  };

  return MsgStore;
};
