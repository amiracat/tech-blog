const { Model, DataTypes } = require('sequelize');
//const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const User = require('./User');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    datecreated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      },
    },
    blogpost_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'blogpost',
        key: 'id'
      },
    },
  },
  {
      //revise hooks
    // hooks: {
    //   beforeCreate: async (newCommentData) => {
    //     newCommentData.password = await bcrypt.hash(newCommentData.password, 10);
    //     return newCommentData;
    //   },
    //   beforeUpdate: async (updatedCommentData) => {
    //     updatedCommentData.password = await bcrypt.hash(updatedCommentData.password, 10);
    //     return updatedCommentData;
    //   },
    // },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
