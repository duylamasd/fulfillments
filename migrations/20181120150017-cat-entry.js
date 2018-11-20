'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CatEntry', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      memberId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      itemSpcId: {
        type: Sequelize.UUID
      },
      catEntTypeId: {
        type: Sequelize.STRING(16),
        allowNull: false
      },
      partNumber: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      mfPartNumber: {
        type: Sequelize.STRING(64)
      },
      mfName: {
        type: Sequelize.STRING(64)
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      url: {
        type: Sequelize.STRING
      },
      field1: {
        type: Sequelize.INTEGER
      },
      field2: {
        type: Sequelize.INTEGER
      },
      field3: {
        type: Sequelize.DECIMAL(20, 5)
      },
      field4: {
        type: Sequelize.STRING
      },
      field5: {
        type: Sequelize.STRING
      },
      onSpecial: {
        type: Sequelize.BOOLEAN
      },
      onAuction: {
        type: Sequelize.BOOLEAN
      },
      buyable: {
        type: Sequelize.BOOLEAN
      },
      baseItemId: {
        type: Sequelize.UUID
      },
      startDate: {
        type: Sequelize.DATE
      },
      endDate: {
        type: Sequelize.DATE
      },
      availabilityDate: {
        type: Sequelize.DATE
      },
      lastOrderDate: {
        type: Sequelize.DATE
      },
      endOfServiceDate: {
        type: Sequelize.DATE
      },
      disContinueDate: {
        type: Sequelize.DATE
      },
      upMfName: {
        type: Sequelize.STRING(64)
      },
      upMfPartNumber: {
        type: Sequelize.STRING(64)
      },
      upPartNumber: {
        type: Sequelize.STRING(64)
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }).then(() => {
      return queryInterface.addIndex('CatEntry', {
        name: 'I0000064',
        unique: true,
        fields: ['partNumber', 'memberId']
      });
    }).then(() => {
      return queryInterface.addIndex('CatEntry', {
        name: 'I0000065',
        fields: ['id', 'deleted']
      });
    }).then(() => {
      return queryInterface.addIndex('CatEntry', {
        name: 'I0000305',
        fields: ['buyable', 'id', 'catEntTypeId']
      });
    }).then(() => {
      return queryInterface.addIndex('CatEntry', {
        name: 'I0000518',
        fields: ['catEntTypeId']
      });
    }).then(() => {
      return queryInterface.addIndex('CatEntry', {
        name: 'I0000519',
        fields: ['memberId']
      });
    }).then(() => {
      return queryInterface.addIndex('CatEntry', {
        name: 'I263103',
        fields: ['id', 'catEntTypeId']
      });
    }).then(() => {
      return queryInterface.addIndex('CatEntry', {
        name: 'I263121',
        fields: ['itemSpcId']
      });
    }).then(() => {
      return queryInterface.addIndex('CatEntry', {
        name: 'I263122',
        fields: ['baseItemId']
      });
    }).then(() => {
      return queryInterface.addIndex('CatEntry', {
        name: 'IPF00003',
        fields: ['upPartNumber']
      });
    }).then(() => {
      return queryInterface.addIndex('CatEntry', {
        name: 'IPF00020',
        fields: ['upMfName']
      });
    }).then(() => {
      return queryInterface.addIndex('CatEntry', {
        name: 'IPF00021',
        fields: ['upMfPartNumber']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('CatEntry', 'I0000064').then(async () => {
      await queryInterface.removeIndex('CatEntry', 'I0000065');
      await queryInterface.removeIndex('CatEntry', 'I0000305');
      await queryInterface.removeIndex('CatEntry', 'I0000518');
      await queryInterface.removeIndex('CatEntry', 'I0000519');
      await queryInterface.removeIndex('CatEntry', 'I263103');
      await queryInterface.removeIndex('CatEntry', 'I263121');
      await queryInterface.removeIndex('CatEntry', 'I263122');
      await queryInterface.removeIndex('CatEntry', 'IPF00003');
      await queryInterface.removeIndex('CatEntry', 'IPF00020');
      await queryInterface.removeIndex('CatEntry', 'IPF00021');
      await queryInterface.dropTable('CatEntry');
    });
  }
};
