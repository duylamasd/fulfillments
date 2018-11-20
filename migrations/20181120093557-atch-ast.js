'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AtchAst', {
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
      atchTgtId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      atchAstPath: {
        type: Sequelize.STRING(256)
      },
      directoryPath: {
        type: Sequelize.STRING(256)
      },
      mimeType: {
        type: Sequelize.STRING(254)
      },
      mimeTypeEncoding: {
        type: Sequelize.STRING(128)
      },
      image1: {
        type: Sequelize.STRING(254)
      },
      image2: {
        type: Sequelize.STRING(254)
      },
      upAtchAstPath: {
        type: Sequelize.STRING(256)
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
      return queryInterface.addIndex('AtchAst', {
        name: 'I0000856',
        unique: true,
        fields: ['storeEntId', 'atchTgtId', 'atchAstPath']
      });
    }).then(() => {
      return queryInterface.addIndex('AtchAst', {
        name: 'I0000857',
        fields: ['storeEntId', 'directoryPath']
      });
    }).then(() => {
      return queryInterface.addIndex('AtchAst', {
        name: 'I0000867',
        fields: ['storeEntId']
      });
    }).then(() => {
      return queryInterface.addIndex('AtchAst', {
        name: 'I0000868',
        fields: ['atchTgtId']
      });
    }).then(() => {
      return queryInterface.addIndex('AtchAst', {
        name: 'IPF00017',
        fields: ['upAtchAstPath']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('AtchAst', 'I0000856').then(async () => {
      await queryInterface.removeIndex('AtchAst', 'I0000857');
      await queryInterface.removeIndex('AtchAst', 'I0000867');
      await queryInterface.removeIndex('AtchAst', 'I0000868');
      await queryInterface.removeIndex('AtchAst', 'IPF00017');
      await queryInterface.dropTable('AtchAst');
    })
  }
};
