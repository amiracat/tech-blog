const router = require('express').Router();
const { Blogpost, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/dashboard', async (req, res) => {
    try {
      const blogpostData = await Blogpost.findAll({
        include: [
          {
            model: User,
            attributes: ['filename', 'description'],
          },
        ],
      });
      const blogposts = blogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );

    res.render('/dashboard', {
      blogposts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});