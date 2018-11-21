'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StoreCgry', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(50)
      },
      remark: {
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
      await queryInterface.addIndex('StoreCgry', {
        name: 'I0000239',
        unique: true,
        fields: ['name']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('StoreCgry', 'I0000239').then(async () => {
      await queryInterface.dropTable('StoreCgry');
    });
  }
};
