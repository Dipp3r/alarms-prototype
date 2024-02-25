'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GlobalAlarms', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      ActStack: {
        type: Sequelize.STRING
      },
      PriorityLevel: {
        type: Sequelize.INTEGER
      },
      Severity: {
        type: Sequelize.INTEGER
      },
      AlarmState: {
        type: Sequelize.STRING
      },
      ObjectName: {
        type: Sequelize.STRING
      },
      Condition: {
        type: Sequelize.STRING
      },
      Message: {
        type: Sequelize.STRING
      },
      EventTime: {
        type: Sequelize.STRING
      },
      ActiveTime: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GlobalAlarms');
  }
};