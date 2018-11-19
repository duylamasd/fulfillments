'use strict';

module.exports = (sequelize, DataTypes) => {
  let Member = sequelize.define('Member', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    type: {
      type: DataTypes.ENUM,
      values: ['O', 'U', 'G'],
      defaultValue: 'U',
      allowNull: false
    },
    state: {
      type: DataTypes.ENUM,
      values: [0, 1, 2, 3],
      allowNull: true,
      defaultValue: null
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I274130',
        unique: false,
        fields: ['id', 'type']
      }
    ]
  });

  Member.associate = models => {
    // F_790
    Member.hasMany(models.StoreEnt, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });

    // F_317
    Member.hasMany(models.FfmCenter, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });

    // F_203
    Member.hasMany(models.CatEntry, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });

    // F_253
    Member.hasMany(models.Contract, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });

    // F_406
    Member.hasMany(models.ItemSpc, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });

    // F_757
    Member.hasMany(models.StAddress, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });

    // F_108
    Member.hasMany(models.BaseItem, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });

    // F_738
    Member.hasMany(models.SchConfig, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });

    // F_896
    Member.hasOne(models.Users, {
      foreignKey: 'id',
      sourceKey: 'id'
    });

    // F_1138
    Member.hasMany(models.Orders, {
      foreignKey: 'editorId',
      sourceKey: 'id'
    });

    // F_516
    Member.hasMany(models.Orders, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });

    // F_555
    Member.hasOne(models.OrgEntity, {
      foreignKey: 'id',
      sourceKey: 'id'
    });

    // F_59
    Member.hasMany(models.Address, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });

    // F_57
    Member.hasMany(models.AddrBook, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });

    // F_24
    Member.hasMany(models.Account, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });

    // F_1089
    Member.hasMany(models.OrdRelease, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });

    // F_587
    Member.hasMany(models.PickBatch, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });

    // F_1103
    Member.hasMany(models.AtchTgt, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });
  };

  return Member;
};
