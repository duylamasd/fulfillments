'use strict';

module.exports = (sequelize, DataTypes) => {
  let StoreEnt = sequelize.define('StoreEnt', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    memberId: {
      type: DataTypes.UUIDV4
    },
    type: {
      type: DataTypes.ENUM,
      values: ['G', 'S'],
      defaultValue: 'G',
      allowNull: false
    },
    setcCurr: {
      type: DataTypes.CHAR(3)
    },
    identifier: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000787',
        unique: false,
        fields: ['memberId']
      },
      {
        name: 'I0000240',
        unique: true,
        fields: ['identifier', 'memberId']
      }
    ]
  });

  StoreEnt.associate = models => {
    // F_790
    StoreEnt.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    // F_775
    StoreEnt.hasOne(models.Store, {
      foreignKey: 'id',
      sourceKey: 'id'
    });

    // F_789
    StoreEnt.belongsTo(models.SetcCurr, {
      foreignKey: 'setcCurr',
      targetKey: 'setcCurr'
    });

    // F_795
    StoreEnt.belongsTo(models.StoreGrp, {
      foreignKey: 'id',
      targetKey: 'id'
    });
  };

  return StoreEnt;
};
