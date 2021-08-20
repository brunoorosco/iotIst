'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sensores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  sensores.init({
    idMaq: DataTypes.INTEGER,
    tempo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sensores',
  });
  return sensores;
};