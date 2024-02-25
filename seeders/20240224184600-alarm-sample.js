'use strict';
const { faker } = require("@faker-js/faker");
const db = require("../models");

const GlobalAlarm = db["GlobalAlarm"];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const numberOfAlarms = 1000;
    const alarms = [];
    for(var i = 0; i<numberOfAlarms; i++){
      alarms.push({
        id: faker.string.uuid(),
        ActStack: faker.lorem.sentence(),
        PriorityLevel: faker.number.int({min:1,max:4}),
        Severity: faker.number.int({min:100,max:1000}),
        AlarmState: faker.lorem.sentence(),
        ObjectName: faker.lorem.sentence(),
        Condition: faker.lorem.sentence(),
        Message: faker.lorem.sentence(),
        EventTime: faker.date.past(),
        ActiveTime: faker.date.past(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      });
    }
    try {
      await queryInterface.bulkInsert('GlobalAlarms', alarms, {});
    } catch (error) {
      console.log(error);
    }
  },

  async down (queryInterface, Sequelize) {
    await GlobalAlarm.destroy({where:{}});
  }
};
