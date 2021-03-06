'use strict';

module.exports = (sequelize, DataTypes) => {
  let Language = sequelize.define('Language', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    localeName: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: 'en_US'
    },
    language: {
      type: DataTypes.STRING(5),
      defaultValue: 'en'
    },
    country: {
      type: DataTypes.STRING(5),
      defaultValue: 'US'
    },
    variant: {
      type: DataTypes.STRING(10)
    },
    encoding: {
      type: DataTypes.STRING(32)
    },
    mimeCharset: {
      type: DataTypes.STRING(32)
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  Language.associate = models => {
    // F_777
    Language.hasMany(models.Store, {
      foreignKey: 'languageId',
      sourceKey: 'id'
    });

    // F_315
    Language.hasMany(models.FfmCentDs, {
      foreignKey: 'languageId',
      sourceKey: 'id'
    });

    // F_897
    Language.hasMany(models.Users, {
      foreignKey: 'languageId',
      sourceKey: 'id'
    });
  };

  return Language;
};
