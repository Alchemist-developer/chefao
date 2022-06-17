"use strict";

const { DataTypes } = require('sequelize');
const db = require ('../index');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      idUsers: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      apartment: {
        type: DataTypes.INTEGER,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      admin: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
