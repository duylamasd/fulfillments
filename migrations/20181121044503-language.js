'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Language', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      localeName: {
        type: Sequelize.STRING(16),
        allowNull: false,
        defaultValue: 'en_US'
      },
      language: {
        type: Sequelize.STRING(5),
        defaultValue: 'en'
      },
      country: {
        type: Sequelize.STRING(5),
        defaultValue: 'US'
      },
      variant: {
        type: Sequelize.STRING(10)
      },
      encoding: {
        type: Sequelize.STRING(32)
      },
      mimeCharset: {
        type: Sequelize.STRING(32)
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Language');
  }
};
