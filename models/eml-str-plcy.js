'use strict';

module.exports = (sequelize, DataTypes) => {
  let EmlStrPlcy = sequelize.define('EmlStrPlcy', {
    emlPolicyId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000383',
        fields: ['storeEntId']
      }
    ]
  });

  EmlStrPlcy.removeAttribute('id');

  EmlStrPlcy.associate = models => {
    // F_1039
    EmlStrPlcy.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_1037
    EmlStrPlcy.belongsTo(models.EmlPolicy, {
      foreignKey: 'emlPolicyId',
      targetKey: 'id'
    });
  };

  return EmlStrPlcy;
};
