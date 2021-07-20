const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

//user has many blogposts
User.hasMany(Blogpost, {
  foreignKey: 'user_id'
});

Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});

//user has many comments
User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

//blogpost has many comments
Blogpost.hasMany(Comment, {
  foreignKey: 'blogpost_id',
});

Comment.belongsTo(Blogpost, {
  foreignKey: 'blogpost_id'
});


module.exports = { User, Blogpost, Comment };
