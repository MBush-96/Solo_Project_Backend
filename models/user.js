'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user.hasMany(models.city)
    }
  };
  user.init({
    username: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true,
        len: [4, 10],
        isAlphanumeric: true
      }
    },
    password: {
      type: DataTypes.STRING, allowNull: false,
      validate: {
        notNull: true,
        len: [5, 20]
      }
    },

    infantryInReserve: {
      type: DataTypes.INTEGER, allowNull: false,
      validate: {
        notNull: true,
        isNumeric: true
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};