'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StoreEnt', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      memberId: {
        type: Sequelize.UUID
      },
      type: {
        type: Sequelize.CHAR(1),
        defaultValue: 'G',
        allowNull: false
      },
      setcCurr: {
        type: Sequelize.STRING(3)
      },
      identifier: {
        type: Sequelize.STRING,
        allowNull: false
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
      await queryInterface.addIndex('StoreEnt', {
        name: 'I0000787',
        unique: false,
        fields: ['memberId']
      });
      await queryInterface.addIndex('StoreEnt', {
        name: 'I0000240',
        unique: true,
        fields: ['identifier', 'memberId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('StoreEnt', 'I0000787').then(async () => {
      await queryInterface.removeIndex('StoreEnt', 'I0000240');
      await queryInterface.dropTable('StoreEnt');
    });
  }
};
