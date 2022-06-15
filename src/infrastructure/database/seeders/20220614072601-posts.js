"use strict";

const { faker } = require("@faker-js/faker");

let seed = [];
for (let i = 1; i <= 10; i++) {
  seed.push(
    {
      idUsers:i,
      content: faker.lorem.words(20),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  );
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Posts", seed);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Posts", null, {});
  }
};