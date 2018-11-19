'use strict';

module.exports = (sequelize, DataTypes) => {
  let Contract = sequelize.define('Contract', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    majorVersion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    minorVersion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    memberId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    origin: {
      type: DataTypes.ENUM,
      values: [0, 1, 2, 3, 4, 5, 6],
      allowNull: false,
      defaultValue: 0
    },
    state: {
      type: DataTypes.ENUM,
      values: [0, 1, 2, 3, 4, 5, 6, 7, -1, -2],
      allowNull: false,
      defaultValue: 0
    },
    usage: {
      type: DataTypes.ENUM,
      values: [0, 1, 2, 3, 4, 5, 6],
      allowNull: false,
      defaultValue: 0
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    comments: {
      type: DataTypes.STRING(4000)
    },
    timeApproved: {
      type: DataTypes.DATE
    },
    timeActivated: {
      type: DataTypes.DATE
    },
    timeDeployed: {
      type: DataTypes.DATE
    },
    familyId: {
      type: DataTypes.UUIDV4
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000078',
        unique: true,
        fields: ['name', 'memberId', 'majorVersion', 'minorVersion', 'origin']
      },
      {
        name: 'I0000539',
        fields: ['memberId']
      },
      {
        name: 'I0001510',
        fields: ['familyId']
      }
    ]
  });

  Contract.associate = models => {
    // F_253
    Contract.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    // F_252
    Contract.hasOne(models.Trading, {
      foreignKey: 'id',
      sourceKey: 'id'
    });

    // F_925
    Contract.hasMany(models.Store, {
      foreignKey: 'crtDbyCntrId',
      sourceKey: 'id'
    });
  };

  return Contract;
};
