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
    setCcurr: {
      type: DataTypes.STRING(3)
    },
    identifier: {
      type: DataTypes.STRING,
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
    StoreEnt.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    StoreEnt.belongsTo(models.Store, {
      foreignKey: 'id',
      targetKey: 'id'
    });
  };

  return StoreEnt;
};
