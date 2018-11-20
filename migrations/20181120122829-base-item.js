'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BaseItem', {
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
      itemTypeId: {
        type: Sequelize.STRING(4),
        allowNull: false
      },
      quantityMeasure: {
        type: Sequelize.STRING(16),
        allowNull: false,
        defaultValue: 'C62'
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      partNumber: {
        type: Sequelize.STRING(72),
        allowNull: false
      },
      quantityMultiple: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        defaultValue: 1.0
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
      return queryInterface.addIndex('BaseItem', {
        name: 'I0000040',
        unique: true,
        fields: ['memberId', 'partNumber']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('BaseItem', 'I0000040').then(() => {
      queryInterface.dropTable('BaseItem');
    });
  }
};
