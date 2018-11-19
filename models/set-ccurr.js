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
      type: DataTypes.CHAR(40)
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
  };

  return SetcCurr;
};
