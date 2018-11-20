'use strict';

module.exports = (sequelize, DataTypes) => {
  let ExpType = sequelize.define('ExpType', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(254)
    },
    implCls: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    objCls: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    field1: {
      type: DataTypes.STRING(254)
    },
    field2: {
      type: DataTypes.STRING(254)
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  ExpType.associate = models => {
    // F_1501
    ExpType.hasMany(models.Experiment, {
      foreignKey: 'expTypeId',
      sourceKey: 'id'
    });
  };

  return ExpType;
};
