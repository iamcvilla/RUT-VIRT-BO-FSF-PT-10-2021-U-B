const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pool extends Model {}

Pool.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'pool',
  }
);

module.exports = Pool;
