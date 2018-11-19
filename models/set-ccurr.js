'use strict';

module.exports = (sequelize, DataTypes) => {
  let SetcCurr = sequelize.define('SetcCurr', {
    setcCurr: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    setcCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    setcExp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    setcNote: {
      type: DataTypes.STRING(40)
    }
  }, {
    timestamps: true,
    freezeTableName: true
  });

  SetcCurr.removeAttribute('id');

  SetcCurr.associate = models => {
    // F_789
    SetcCurr.hasMany(models.StoreEnt, {
      foreignKey: 'setcCurr',
      sourceKey: 'setcCurr'
    });

    // F_898
    SetcCurr.hasMany(models.Users, {
      foreignKey: 'setcCurr',
      sourceKey: 'setcCurr'
    });

    // F_136
    SetcCurr.hasMany(models.BuyerPo, {
      foreignKey: 'setcCurr',
      sourceKey: 'setcCurr'
    });
  };

  return SetcCurr;
};
