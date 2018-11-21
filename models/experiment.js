'use strict';

module.exports = (sequelize, DataTypes) => {
  let Experiment = sequelize.define('Experiment', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    expTypeId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    prioriry: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    expireCount: {
      type: DataTypes.INTEGER
    },
    startDate: {
      type: DataTypes.DATE
    },
    endDate: {
      type: DataTypes.DATE
    },
    resultScope: {
      type: DataTypes.ENUM,
      values: ['E', 'S', 'R'],
      allowNull: false
    },
    preferredElement: {
      type: DataTypes.SMALLINT
    },
    status: {
      type: DataTypes.ENUM,
      values: ['A', 'I', 'E', 'C', 'D'],
      allowNull: false,
      defaultValue: 'A'
    },
    field1: {
      type: DataTypes.INTEGER
    },
    field2: {
      type: DataTypes.BIGINT
    },
    field3: {
      type: DataTypes.DECIMAL(20, 5)
    },
    field4: {
      type: DataTypes.STRING(254)
    },
    description: {
      type: DataTypes.STRING(254)
    },
    lastUpdatedBy: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    ruleXml: {
      type: DataTypes.TEXT('long')
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0001500',
        unique: true,
        fields: ['name', 'storeEntId']
      },
      {
        name: 'I0001501',
        fields: ['storeEntId', 'status']
      }
    ]
  });

  Experiment.associate = models => {
    // F_1500
    Experiment.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_1501
    Experiment.belongsTo(models.ExpType, {
      foreignKey: 'expTypeId',
      targetKey: 'id'
    });
  };

  return Experiment;
};
