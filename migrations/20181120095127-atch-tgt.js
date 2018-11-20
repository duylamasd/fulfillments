'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AtchTgt', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      memberId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      identifier: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      attachUsgId: {
        type: Sequelize.STRING(64)
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      field1: {
        type: Sequelize.BIGINT
      },
      field2: {
        type: Sequelize.DOUBLE
      },
      field3: {
        type: Sequelize.STRING(254)
      },
      field4: {
        type: Sequelize.STRING(254)
      },
      upIdentifier: {
        type: Sequelize.STRING(128)
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
      return queryInterface.addIndex('AtchTgt', {
        name: 'I0000854',
        unique: true,
        fields: ['storeEntId', 'memberId', 'identifier']
      });
    }).then(() => {
      return queryInterface.addIndex('AtchTgt', {
        name: 'I0000862',
        fields: ['storeEntId']
      });
    }).then(() => {
      return queryInterface.addIndex('AtchTgt', {
        name: 'I0000863',
        fields: ['memberId']
      });
    }).then(() => {
      return queryInterface.addIndex('AtchTgt', {
        name: 'I0000864',
        fields: ['attachUsgId']
      });
    }).then(() => {
      return queryInterface.addIndex('AtchTgt', {
        name: 'IPF00018',
        fields: ['upIdentifier']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('AtchTgt', 'I0000854').then(async () => {
      await queryInterface.removeIndex('AtchTgt', 'I0000862');
      await queryInterface.removeIndex('AtchTgt', 'I0000863');
      await queryInterface.removeIndex('AtchTgt', 'I0000864');
      await queryInterface.removeIndex('AtchTgt', 'IPF00018');
      await queryInterface.dropTable('AtchTgt');
    });
  }
};
