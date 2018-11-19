'use strict';

module.exports = (sequelize, DataTypes) => {
  let CatEntShip = sequelize.define('CatEntShip', {
    catEntryId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    weight: {
      type: DataTypes.DOUBLE
    },
    weightMeasure: {
      type: DataTypes.CHAR(16)
    },
    length: {
      type: DataTypes.DOUBLE
    },
    width: {
      type: DataTypes.DOUBLE
    },
    height: {
      type: DataTypes.DOUBLE
    },
    sizeMeasure: {
      type: DataTypes.CHAR(16)
    },
    nominalQuantity: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 1.0
    },
    quantityMultiple: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 1.0
    },
    quantityMeasure: {
      type: DataTypes.CHAR(16),
      allowNull: false,
      defaultValue: 'C62'
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  CatEntShip.associate = models => {
    // F_205
    CatEntShip.belongsTo(models.CatEntry, {
      foreignKey: 'catEntryId',
      targetKey: 'id'
    });

    // F_206
    CatEntShip.belongsTo(models.QtyUnit, {
      foreignKey: 'quantityMeasure',
      targetKey: 'id'
    });

    // F_207
    CatEntShip.belongsTo(models.QtyUnit, {
      foreignKey: 'sizeMeasure',
      targetKey: 'id'
    });

    // F_208
    CatEntShip.belongsTo(models.QtyUnit, {
      foreignKey: 'weightMeasure',
      targetKey: 'id'
    });
  };

  return CatEntShip;
};
