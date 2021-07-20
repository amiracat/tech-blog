const router = require('express').Router();
const {
  route
} = require('.');
const {
  User,
  Blogpost,
  Comment
} = require('../../models');
const withAuth = require('../../utils/auth.js');
const sequelize = require('../../config/connection');

//get all posts
router.get('/', (req, res) => {
    Blogpost.findAll({})
    .then(blogpostData => res.json(blogpostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//add a blogpost
router.post('/', withAuth, (req, res) => {
    Blogpost.create({
        title: req.body.title,
        content: req.body.content,
        datecreated: req.body.datecreated,
        user_id: req.session.user_id
    })
    .then(blogpostData => res.json(blogpostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;

