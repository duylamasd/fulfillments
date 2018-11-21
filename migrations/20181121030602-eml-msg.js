'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EmlMsg', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      jspPath: {
        type: Sequelize.STRING(254)
      },
      name: {
        type: Sequelize.STRING(254),
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(254)
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      emlBodyType: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
      upName: {
        type: Sequelize.STRING(254)
      },
      upDescription: {
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
      await queryInterface.addIndex('EmlMsg', {
        name: 'I0000288',
        unique: true,
        fields: ['storeEntId', 'name']
      });
      await queryInterface.addIndex('EmlMsg', {
        name: 'IPF00004',
        fields: ['upName']
      });
      await queryInterface.addIndex('EmlMsg', {
        name: 'IPF00005',
        fields: ['upDescription']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('EmlMsg', 'I0000288').then(async () => {
      await queryInterface.removeIndex('EmlMsg', 'IPF00004');
      await queryInterface.removeIndex('EmlMsg', 'IPF00005');
      await queryInterface.dropTable('EmlMsg');
    });
  }
};
