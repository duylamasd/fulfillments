'use strict';

module.exports = (sequuelize, DataTypes) => {
  let AddrBook = sequuelize.define('AddrBook', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    memberId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    type: {
      type: DataTypes.CHAR(1)
    },
    displayName: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(254)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000013',
        unique: true,
        fields: ['id', 'memberId']
      },
      {
        name: 'I0000014',
        fields: ['memberId']
      }
    ]
  });

  AddrBook.associate = models => {
    // F_57
    AddrBook.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    // F_58
    AddrBook.hasOne(models.Address, {
      foreignKey: 'id',
      sourceKey: 'id'
    });
  };

  return AddrBook;
};
