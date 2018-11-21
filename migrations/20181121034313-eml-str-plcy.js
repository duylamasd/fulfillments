'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EmlStrPlcy', {
      emlPolicyId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      storeEntId: {
        type: Sequelize.UUID,
        allowNull: false
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
      await queryInterface.addIndex('EmlStrPlcy', {
        name: 'I0000383',
        fields: ['storeEntId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('EmlStrPlcy', 'I0000383').then(async () => {
      await queryInterface.dropTable('EmlStrPlcy');
    });
  }
};
