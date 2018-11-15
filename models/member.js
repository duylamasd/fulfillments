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
    Member.hasMany(models.StoreEnt, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });

    Member.hasMany(models.FfmCenter, {
      foreignKey: 'memberId',
      sourceKey: 'id'
    });
  };

  return Member;
};
