'use strict';

module.exports = (sequelize, DataTypes) => {
  let EmlPolicy = sequelize.define('EmlPolicy', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    numRetries: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    interval: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  EmlPolicy.associate = models => {
    // F_1037
    EmlPolicy.hasOne(models.EmlStrPlcy, {
      foreignKey: 'emlPolicyId',
      sourceKey: 'id'
    });
  };

  return EmlPolicy;
};
