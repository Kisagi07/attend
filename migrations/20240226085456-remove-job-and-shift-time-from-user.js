"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn("users", "job_position");
    await queryInterface.removeColumn("users", "today_shift");
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn("users", "job_position", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("users", "today_shift", {
      type: Sequelize.STRING,
    });
  },
};
