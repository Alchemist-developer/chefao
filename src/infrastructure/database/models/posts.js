const { DataTypes } = require('sequelize');
const db = require ('../index');

const Posts = db.define (
  "Posts",
  {
    idPosts: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    idUsers: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: {
                tableName:"Users",
        },        
        key: "idUser"
      }
    },
    content: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    tableName: "posts"
  }
    
);

module.exports = Posts;