const User = require('./User');
const Blogpost = require('./Blogpost');

//user has many blogposts
User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  //onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});

//user has many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  //onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

//blogpost has many comments
Blogpost.hasMany(Comment, {
  foreignKey: 'blogpost_id',
  //onDelete: 'CASCADE'
});

Comment.belongsTo(Blogpost, {
  foreignKey: 'blogpost_id'
});


module.exports = { User, Blogpost };
