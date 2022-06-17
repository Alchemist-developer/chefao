const Posts = require('../models/posts')
const Users = require ('../models/users')

Posts.belongsTo(
  Users, {
    foreignKey: 'idUsers'
  }
);

Users.hasMany(
  Posts, {
    foreignKey: 'idUsers'
  }
);

module.exports = {
  Posts,
  Users
};