'use strict';

module.exports = (sequelize, DataTypes) => {
  let AtchTgt = sequelize.define('AtchTgt', {
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
    memberId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    identifier: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    attachUsgId: {
      type: DataTypes.STRING(64)
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    field1: {
      type: DataTypes.BIGINT
    },
    field2: {
      type: DataTypes.DOUBLE
    },
    field3: {
      type: DataTypes.STRING(254)
    },
    field4: {
      type: DataTypes.STRING(254)
    },
    upIdentifier: {
      type: DataTypes.STRING(128)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000854',
        unique: true,
        fields: ['storeEntId', 'memberId', 'identifier']
      },
      {
        name: 'I0000862',
        fields: ['storeEntId']
      },
      {
        name: 'I0000863',
        fields: ['memberId']
      },
      {
        name: 'I0000864',
        fields: ['attachUsgId']
      },
      {
        name: 'IPF00018',
        fields: ['upIdentifier']
      }
    ]
  });

  AtchTgt.associate = models => {
    // F_1102
    AtchTgt.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_1103
    AtchTgt.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    // F_1104
    AtchTgt.belongsTo(models.AttachUsg, {
      foreignKey: 'attachUsgId',
      targetKey: 'id'
    });

    // F_1108
    AtchTgt.hasMany(models.AtchAst, {
      foreignKey: 'atchTgtId',
      sourceKey: 'id'
    });
  };

  return AtchTgt;
};
