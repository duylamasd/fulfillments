'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SchConfig', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      sccHost: {
        type: Sequelize.STRING(128)
      },
      memberId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      sccRecDelay: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      sccRecAtt: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      sccPathInfo: {
        type: Sequelize.STRING(254),
        allowNull: false
      },
      sccQuery: {
        type: Sequelize.STRING(3000)
      },
      sccStart: {
        type: Sequelize.DATE,
        allowNull: false
      },
      sccInterval: {
        type: Sequelize.INTEGER
      },
      sccPriority: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      sccSequence: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      sccActive: {
        type: Sequelize.CHAR(1),
        allowNull: false,
        defaultValue: 'A'
      },
      sccAppType: {
        type: Sequelize.STRING(20)
      },
      interfaceName: {
        type: Sequelize.STRING(254)
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }).then(async () => {
      await queryInterface.addIndex('SchConfig', {
        name: 'I0000226',
        unique: true,
        fields: ['id', 'sccSequence']
      });
      await queryInterface.addIndex('SchConfig', {
        name: 'I0000321',
        fields: ['sccPathInfo']
      });
      await queryInterface.addIndex('SchConfig', {
        name: 'I0000322',
        fields: ['sccHost']
      });
      await queryInterface.addIndex('SchConfig', {
        name: 'I0000323',
        fields: ['sccAppType']
      });
      await queryInterface.addIndex('SchConfig', {
        name: 'I0000759',
        fields: ['memberId']
      });
      await queryInterface.addIndex('SchConfig', {
        name: 'I0000760',
        fields: ['storeEntId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('SchConfig', 'I0000226').then(async () => {
      await queryInterface.removeIndex('SchConfig', 'I0000321');
      await queryInterface.removeIndex('SchConfig', 'I0000322');
      await queryInterface.removeIndex('SchConfig', 'I0000323');
      await queryInterface.removeIndex('SchConfig', 'I0000759');
      await queryInterface.removeIndex('SchConfig', 'I0000760');
      await queryInterface.dropTable('SchConfig');
    });
  }
};
