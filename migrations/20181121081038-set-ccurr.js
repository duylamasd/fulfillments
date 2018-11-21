'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SetcCurr', {
      setcCurr: {
        type: Sequelize.CHAR(3),
        allowNull: false,
        primaryKey: true
      },
      setcCode: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      setcExp: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      setcNote: {
        type: Sequelize.STRING(40)
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
    return queryInterface.dropTable('SetcCurr');
  }
};
