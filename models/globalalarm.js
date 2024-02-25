'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GlobalAlarm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GlobalAlarm.init({
    id: {
      primaryKey:true,
      type: DataTypes.STRING,
    },
    ActStack: DataTypes.STRING,
    PriorityLevel: DataTypes.INTEGER,
    Severity: DataTypes.INTEGER,
    AlarmState: DataTypes.STRING,
    ObjectName: DataTypes.STRING,
    Condition: DataTypes.STRING,
    Message: DataTypes.STRING,
    EventTime: DataTypes.STRING,
    ActiveTime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GlobalAlarm',
  });
  return GlobalAlarm;
};