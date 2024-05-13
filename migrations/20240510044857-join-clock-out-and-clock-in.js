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
    await queryInterface.renameColumn("logs", "time", "clock_in_time");
    await queryInterface.renameColumn("logs", "latitude", "clock_in_latitude");
    await queryInterface.renameColumn(
      "logs",
      "longitude",
      "clock_in_longitude"
    );
    await queryInterface.addColumn("logs", "clock_out_time", Sequelize.TIME);
    await queryInterface.addColumn(
      "logs",
      "clock_out_latitude",
      Sequelize.DECIMAL(10, 8)
    );
    await queryInterface.addColumn(
      "logs",
      "clock_out_longitude",
      Sequelize.DECIMAL(11, 8)
    );
    await queryInterface.changeColumn("logs", "type", {
      type: Sequelize.ENUM("work-from-home", "sick", "work-from-office"),
      allowNull: false,
      defaultValue: "work-from-office",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.renameColumn("logs", "clock_in_time", "time");
    await queryInterface.renameColumn("logs", "clock_in_latitude", "latitude");
    await queryInterface.renameColumn(
      "logs",
      "clock_in_longitude",
      "longitude"
    );
    await queryInterface.removeColumn("logs", "clock_out_time");
    await queryInterface.removeColumn("logs", "clock_out_latitude");
    await queryInterface.removeColumn("logs", "clock_out_longitude");
    await queryInterface.changeColumn("logs", "type", {
      type: Sequelize.ENUM("from-office", "from-home", "sick-day"),
      allowNull: false,
      defaultValue: "from-office",
    });
  },
};
