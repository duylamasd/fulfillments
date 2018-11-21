'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Member', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      type: {
        type: Sequelize.CHAR(1),
        defaultValue: 'U',
        allowNull: false
      },
      state: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: null
      }
    }).then(async () => {
      await queryInterface.addIndex('Member', {
        name: 'I274130',
        unique: false,
        fields: ['id', 'type']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('Member', 'I274130').then(async () => {
      await queryInterface.dropTable('Member');
    });
  }
};
