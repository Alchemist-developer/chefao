"use strict";

const { DataTypes } = require('sequelize');
const db = require ('../index');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Posts", {
      idPosts: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsers: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: {
                  tableName:"Users",
          },        
          key: "idUsers"
        }
      },
      content: {
        type: Sequelize.STRING(300)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Posts");
  }
};