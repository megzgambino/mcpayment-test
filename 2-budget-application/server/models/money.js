'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Money extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Money.init({
    balance: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
        min: 0,
        isDecimal: false,
      }
    },
    income: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
        min: 0,
        isDecimal: false,
      }
    },
    expenses: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
        min: 0,
        isDecimal: false,
      }
    },
  }, {
    sequelize,
    modelName: 'Money',
  });
  return Money;
};