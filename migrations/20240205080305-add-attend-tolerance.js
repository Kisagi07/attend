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
    queryInterface.addColumn("company", "tolerance_active", {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
    queryInterface.addColumn("company", "tolerance_time", {
      type: Sequelize.INTEGER,
      defaultValue: 30,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.removeColumn("company", "tolerance_active");
    queryInterface.removeColumn("company", "tolerance_time");
  },
};
