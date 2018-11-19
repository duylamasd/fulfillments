'use strict';

module.exports = (sequelize, DataTypes) => {
  let Users = sequelize.define('Users', {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    dn: {
      type: DataTypes.STRING(1000)
    },
    registerType: {
      type: DataTypes.ENUM,
      values: ['R', 'G', 'A', 'S'],
      allowNull: false
    },
    profileType: {
      type: DataTypes.ENUM,
      values: ['C', 'B']
    },
    languageId: {
      type: DataTypes.INTEGER
    },
    field1: {
      type: DataTypes.STRING(254)
    },
    field2: {
      type: DataTypes.STRING(254)
    },
    field3: {
      type: DataTypes.STRING(254)
    },
    setcCurr: {
      type: DataTypes.CHAR(3)
    },
    lastOrder: {
      type: DataTypes.DATE
    },
    registration: {
      type: DataTypes.DATE
    },
    lastSession: {
      type: DataTypes.DATE
    },
    registrationUpdate: {
      type: DataTypes.DATE
    },
    personalizationId: {
      type: DataTypes.STRING(30)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000969',
        fields: ['dn']
      },
      {
        name: 'I0000971',
        fields: ['registerType']
      },
      {
        name: 'I0001109',
        fields: ['personalizationId']
      },
      {
        name: 'I348118',
        fields: ['profileType', 'registerType', 'id']
      }
    ]
  });

  Users.associate = models => {
    // F_896
    Users.belongsTo(models.Member, {
      foreignKey: 'id',
      targetKey: 'id'
    });

    // F_897
    Users.belongsTo(models.Language, {
      foreignKey: 'languageId',
      targetKey: 'id'
    });

    // F_898
    Users.belongsTo(models.SetcCurr, {
      foreignKey: 'setcCurr',
      targetKey: 'setcCurr'
    });

    // F_1035
    Users.hasMany(models.EmlBounced, {
      foreignKey: 'usersId',
      sourceKey: 'id'
    });

    // F_1052
    Users.hasMany(models.PxCoupon, {
      foreignKey: 'usersId',
      sourceKey: 'id'
    });

    // F_1055
    Users.hasMany(models.PxUsage, {
      foreignKey: 'usersId',
      sourceKey: 'id'
    });
  };

  return Users;
};
