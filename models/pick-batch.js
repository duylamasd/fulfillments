'use strict';

module.exports = (sequelize, DataTypes) => {
  let PickBatch = sequelize.define('PickBatch', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    ffmCenterId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    memberId: {
      type: DataTypes.UUIDV4
    },
    pickSlipXml: {
      type: DataTypes.TEXT(1000000000)
    },
    field1: {
      type: DataTypes.INTEGER
    },
    field2: {
      type: DataTypes.STRING(254)
    },
    field3: {
      type: DataTypes.STRING(254)
    },
    date1: {
      type: DataTypes.DATE
    },
    date2: {
      type: DataTypes.DATE
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000691',
        fields: ['memberId']
      },
      {
        name: 'I0000692',
        fields: ['ffmCenterId']
      }
    ]
  });

  PickBatch.associate = models => {
    // F_586
    PickBatch.belongsTo(models.FfmCenter, {
      foreignKey: 'ffmCenterId',
      targetKey: 'id'
    });

    // F_587
    PickBatch.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    // F_546
    PickBatch.hasMany(models.OrdRelease, {
      foreignKey: 'pickBatchId',
      sourceKey: 'id'
    });
  };

  return PickBatch;
};
