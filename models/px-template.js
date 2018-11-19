'use strict';

module.exports = (sequelize, DataTypes) => {
  let PxTemplate = sequelize.define('PxTemplate', {
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
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000420',
        unique: true,
        fields: ['storeEntId', 'name']
      }
    ]
  });

  PxTemplate.associate = models => {
    // F_1081
    PxTemplate.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });
  };

  return PxTemplate;
};
