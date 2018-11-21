'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TxCdClass', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(64)
      },
      txCdSchemeId: {
        type: Sequelize.UUID
      },
      description: {
        type: Sequelize.STRING(254)
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
      await queryInterface.addIndex('TxCdClass', {
        name: 'I0000258',
        unique: true,
        fields: ['storeEntId', 'name']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('TxCdClass', 'I0000258').then(async () => {
      await queryInterface.dropTable('TxCdClass');
    });
  }
};
