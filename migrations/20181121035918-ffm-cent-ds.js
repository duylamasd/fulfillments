'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FfmCentDs', {
      ffmCenterId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      languageId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      stAddressId: {
        type: Sequelize.UUID
      },
      description: {
        type: Sequelize.STRING(4000)
      },
      displayName: {
        type: Sequelize.STRING
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
      await queryInterface.addIndex('FfmCentDs', {
        name: 'I0000570',
        fields: ['stAddressId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('FfmCentDs', 'I0000570').then(async () => {
      await queryInterface.dropTable('FfmCentDs');
    });
  }
};
