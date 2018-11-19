'use strict';

module.exports = (sequelize, DataTypes) => {
  let MsgArchive = sequelize.define('MsgArchive', {
    transportId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    messageIndex: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: {
      type: DataTypes.BLOB(1000000)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000622',
        fields: ['storeEntId']
      }
    ]
  });

  MsgArchive.associate = models => {
    // F_1015
    MsgArchive.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_1014
    MsgArchive,belongsTo(models.Transport, {
      foreignKey: 'transportId',
      targetKey: 'id'
    });
  };

  return MsgArchive;
};
