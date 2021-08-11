const sequelize = require('../config/connection');
const router = require('express').Router();
// const { response } = require('express');
// const { route } = require('.');
const { User, Blogpost, Comment } = require('../../models');

const blogpostData = require('./blogpostData.json');
const commentData = require('./commentData.json');
const userData = require('./userData.json');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: false });

        await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });
        await Blogpost.bulkCreate(blogpostData);
        await Comment.bulkCreate(commentData);
    } catch (err) {
        console.log(err);
    }
    process.exit(0);
};

seedAll();