'use strict';

module.exports = (sequelize, DataTypes) => {
  let PrcOrsn = sequelize.define('PrcOrsn', {
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
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    code: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000968',
        unique: true,
        fields: ['storeEntId', 'code']
      }
    ]
  });

  PrcOrsn.associate = models => {
    // F_1232
    PrcOrsn.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });
  };

  return PrcOrsn;
};
