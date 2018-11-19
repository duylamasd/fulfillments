'use strict';

module.exports = (sequelize, DataTypes) => {
  let Inventory = sequelize.define('Inventory', {
    catEntryId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    ffmCenterId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    storeId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    quantityMeasure: {
      type: DataTypes.CHAR(16),
      allowNull: false,
      defaultValue: 'C62'
    },
    inventoryFlags: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000594',
        fields: ['ffmCenterId']
      },
      {
        name: 'I0000595',
        fields: ['storeId']
      }
    ]
  });

  Inventory.removeAttribute('id');

  Inventory.associate = models => {
    // F_393
    Inventory.belongsTo(models.Store, {
      foreignKey: 'storeId',
      targetKey: 'id'
    });

    // F_396
    Inventory.belongsTo(models.FfmCenter, {
      foreignKey: 'ffmCenterId',
      targetKey: 'id'
    });

    // F_395
    Inventory.belongsTo(models.CatEntry, {
      foreignKey: 'catEntryId',
      targetKey: 'id'
    });

    // F_394
    Inventory.belongsTo(models.QtyUnit, {
      foreignKey: 'quantityMeasure',
      targetKey: 'id'
    });
  };

  return Inventory;
};
