const { Model, DataTypes } = require('sequelize');
//const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Blogpost extends Model {}

Blogpost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    datecreated: {
      type: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
      //revise hooks
    hooks: {
      beforeCreate: async (newBlogpostData) => {
        newBlogpostData.password = await bcrypt.hash(newBlogpostData.password, 10);
        return newBlogpostData;
      },
      beforeUpdate: async (updatedBlogpostData) => {
        updatedBlogpostData.password = await bcrypt.hash(updatedBlogpostData.password, 10);
        return updatedBlogpostData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogpost',
  }
);

module.exports = Blogpost;
