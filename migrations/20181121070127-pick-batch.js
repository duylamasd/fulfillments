'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PickBatch', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      ffmCenterId: {
        type: Sequelize.UUID,
        allowNull: false
      },
      memberId: {
        type: Sequelize.UUID
      },
      pickSlipXml: {
        type: Sequelize.TEXT('long')
      },
      field1: {
        type: Sequelize.INTEGER
      },
      field2: {
        type: Sequelize.STRING(254)
      },
      field3: {
        type: Sequelize.STRING(254)
      },
      date1: {
        type: Sequelize.DATE
      },
      date2: {
        type: Sequelize.DATE
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
      await queryInterface.addIndex('PickBatch', {
        name: 'I0000691',
        fields: ['memberId']
      });
      await queryInterface.addIndex('PickBatch', {
        name: 'I0000692',
        fields: ['ffmCenterId']
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('PickBatch', 'I0000691').then(async () => {
      await queryInterface.removeIndex('PickBatch', 'I0000692');
      await queryInterface.dropTable('PickBatch');
    })
  }
};
