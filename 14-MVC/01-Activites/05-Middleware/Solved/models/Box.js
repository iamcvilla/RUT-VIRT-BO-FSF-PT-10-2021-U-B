const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Box extends Model {}

Box.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pool_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'pool',
        key: 'id',
      },
    },
    user: {
      type: DataTypes.STRING,
    },
    row: {
      type: DataTypes.INTEGER,
    },
    col: {
      type: DataTypes.INTEGER,
    } 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'box',
  }
);

module.exports = Box;
