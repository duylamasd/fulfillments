'use strict';

module.exports = (sequelize, DataTypes) => {
  let AtchAst = sequelize.define('AtchAst', {
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
    atchTgtId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    atchAstPath: {
      type: DataTypes.STRING(256)
    },
    directoryPath: {
      type: DataTypes.STRING(256)
    },
    mimeType: {
      type: DataTypes.STRING(254)
    },
    mimeTypeEncoding: {
      type: DataTypes.STRING(128)
    },
    image1: {
      type: DataTypes.STRING(254)
    },
    image2: {
      type: DataTypes.STRING(254)
    },
    upAtchAstPath: {
      type: DataTypes.STRING(256)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000856',
        unique: true,
        fields: ['storeEntId', 'atchTgtId', 'atchAstPath']
      },
      {
        name: 'I0000857',
        fields: ['storeEntId', 'directoryPath']
      },
      {
        name: 'I0000867',
        fields: ['storeEntId']
      },
      {
        name: 'I0000868',
        fields: ['atchTgtId']
      },
      {
        name: 'IPF00017',
        fields: ['upAtchAstPath']
      }
    ]
  });

  AtchAst.associate = models => {
    // F_1107
    AtchAst.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_1108
    AtchAst.belongsTo(models.AtchTgt, {
      foreignKey: 'atchTgtId',
      targetKey: 'id'
    });
  };

  return AtchAst;
};
