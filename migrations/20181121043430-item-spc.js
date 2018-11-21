'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ItemSpc', {
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
      deleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      baseItemId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      discontinued: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      partNumber: {
        type: Sequelize.STRING(64),
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
      await queryInterface.addIndex('ItemSpc', {
        name: 'I0000138',
        unique: true,
        fields: ['partNumber', 'memberId']
      });
      await queryInterface.addIndex('ItemSpc', {
        name: 'I0000139',
        fields: ['baseItemId', 'id']
      });
      await queryInterface.addIndex('ItemSpc', {
        name: 'I0000361',
        fields: ['id', 'baseItemId', 'partNumber']
      });
      await queryInterface.addIndex('ItemSpc', {
        name: 'I0000599',
        fields: ['memberId']
      });
      await queryInterface.addIndex('ItemSpc', {
        name: 'I800140',
        fields: ['discontinued']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('ItemSpc', 'I0000138').then(async () => {
      await queryInterface.removeIndex('ItemSpc', 'I0000139');
      await queryInterface.removeIndex('ItemSpc', 'I0000361');
      await queryInterface.removeIndex('ItemSpc', 'I0000599');
      await queryInterface.removeIndex('ItemSpc', 'I800140');
      await queryInterface.dropTable('ItemSpc');
    });
  }
};
