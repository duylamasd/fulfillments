'use strict';

module.exports = (sequelize, DataTypes) => {
  let SchConfig = sequelize.define('SchConfig', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    sccHost: {
      type: DataTypes.STRING(128)
    },
    memberId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    storeEntId: {
      type: DataTypes.UUIDV4,
      allowNull: false
    },
    sccRecDelay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sccRecAtt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sccPathInfo: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    sccQuery: {
      type: DataTypes.STRING(3000)
    },
    sccStart: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sccInterval: {
      type: DataTypes.INTEGER
    },
    sccPriority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sccSequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sccActive: {
      type: DataTypes.ENUM,
      values: ['A', 'C', 'I', 'N'],
      allowNull: false,
      defaultValue: 'A'
    },
    sccAppType: {
      type: DataTypes.STRING(20)
    },
    interfaceName: {
      type: DataTypes.STRING(254)
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    indexes: [
      {
        name: 'I0000226',
        unique: true,
        fields: ['id', 'sccSequence']
      },
      {
        name: 'I0000321',
        fields: ['sccPathInfo']
      },
      {
        name: 'I0000322',
        fields: ['sccHost']
      },
      {
        name: 'I0000323',
        fields: ['sccAppType']
      },
      {
        name: 'I0000759',
        fields: ['memberId']
      },
      {
        name: 'I0000760',
        fields: ['storeEntId']
      }
    ]
  });

  SchConfig.associate = models => {
    // F_737
    SchConfig.belongsTo(models.StoreEnt, {
      foreignKey: 'storeEntId',
      targetKey: 'id'
    });

    // F_738
    SchConfig.belongsTo(models.Member, {
      foreignKey: 'memberId',
      targetKey: 'id'
    });

    // F_959
    SchConfig.hasMany(models.EmlPromo, {
      foreignKey: 'sccJobRefNum',
      sourceKey: 'id'
    });
  };

  return SchConfig;
};
