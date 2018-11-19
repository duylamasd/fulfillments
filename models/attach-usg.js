'use strict';

module.exports = (sequelize, DataTypes) => {
  let AttachUsg = sequelize.define('AttachUsg', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  AttachUsg.associate = models => {
    // F_1104
    AttachUsg.hasMany(models.AtchTgt, {
      foreignKey: 'attachUsgId',
      sourceKey: 'id'
    });
  };

  return AttachUsg;
};
