'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('AddrBook', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      memberId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      type: {
        type: Sequelize.CHAR(1)
      },
      displayName: {
        type: Sequelize.STRING(254),
        allowNull: false
      },
      description: {
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
    }).then(() => {
      return queryInterface.addIndex('AddrBook', {
        name: 'I0000013',
        unique: true,
        fields: ['id', 'memberId']
      });
    }).then(() => {
      return queryInterface.addIndex('AddrBook', {
        name: 'I0000014',
        fields: ['memberId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('AddrBook', 'I0000013').then(async () => {
      await queryInterface.removeIndex('AddrBook', 'I0000014');
      await queryInterface.dropTable('AddrBook');
    });
  }
};
