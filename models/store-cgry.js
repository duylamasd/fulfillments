'use strict';

module.exports = (sequelize, DataTypes) => {
  let StoreCgry = sequelize.define('StoreCgry', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50)
    },
    remark: {
      type: DataTypes.STRING(254)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000239',
        unique: true,
        fields: ['name']
      }
    ]
  });

  StoreCgry.associate = models => {
    // F_773
    StoreCgry.hasMany(models.Store, {
      foreignKey: 'storeCgryId',
      sourceKey: 'id'
    });
  };

  return StoreCgry;
};
