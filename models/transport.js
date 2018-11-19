'use strict';

module.exports = (sequelize, DataTypes) => {
  let Transport = sequelize.define('Transport', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    implemented: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    addressable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    code: {
      type: DataTypes.STRING(2)
    },
    name: {
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
        name: 'I0000256',
        unique: true,
        fields: ['name']
      }
    ]
  });

  Transport.associate = models => {
    // F_1014
    Transport.hasMany(models.MsgArchive, {
      foreignKey: 'transportId',
      sourceKey: 'id'
    });

    // F_1024
    Transport.hasMany(models.MsgStore, {
      foreignKey: 'transportId',
      sourceKey: 'id'
    });
  };

  return Transport;
};
