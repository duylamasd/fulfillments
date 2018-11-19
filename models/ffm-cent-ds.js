'use strict';

module.exports = (sequelize, DataTypes) => {
  let FfmCentDs = sequelize.define('FfmCentDs', {
    ffmCenterId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    languageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stAddressId: {
      type: DataTypes.UUIDV4
    },
    description: {
      type: DataTypes.STRING(4000)
    },
    displayName: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000570',
        fields: ['stAddressId']
      }
    ]
  });

  FfmCentDs.associate = models => {
    // F_315
    FfmCentDs.belongsTo(models.Language, {
      foreignKey: 'languageId',
      targetKey: 'id'
    });

    // F_316
    FfmCentDs.belongsTo(models.FfmCenter, {
      foreignKey: 'ffmCenterId',
      targetKey: 'id'
    });

    // F_314
    FfmCentDs.belongsTo(models.StAddress, {
      foreignKey: 'stAddressId',
      targetKey: 'id'
    });
  };

  return FfmCentDs;
};
