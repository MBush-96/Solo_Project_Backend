'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.city.belongsTo(models.user)
    }
  };
  city.init({
    name: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true,
        isAlpha: true
      }
    },
    infantryInCity: {
      type: DataTypes.INTEGER, allowNull: false,
      validate: {
        isNumeric: true,
        min: 0,
        notNull: true
      }
    },
    userId: {
      type: DataTypes.INTEGER, allowNull: false,
      validate: {
        notNull: true,
        isNumeric: true
      }
    },
    previousOwnerUserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'city',
  });
  return city;
};