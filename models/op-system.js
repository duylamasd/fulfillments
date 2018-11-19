'use strict';

module.exports = (sequelize, DataTypes) => {
  let OpSystem = sequelize.define('OpSystem', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(254),
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  OpSystem.associate = models => {
    // R_3455
    OpSystem.hasMany(models.Orders, {
      foreignKey: 'opSystemId',
      sourceKey: 'id'
    });
  };

  return OpSystem;
};
