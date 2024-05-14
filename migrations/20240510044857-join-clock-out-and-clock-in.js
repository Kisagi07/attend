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
    await queryInterface.renameColumn("logs", "longitude", "clock_in_longitude");
    await queryInterface.addColumn("logs", "clock_out_time", Sequelize.TIME);
    await queryInterface.addColumn("logs", "clock_out_latitude", Sequelize.DECIMAL(10, 8));
    await queryInterface.addColumn("logs", "clock_out_longitude", Sequelize.DECIMAL(11, 8));
    await queryInterface.changeColumn("logs", "type", {
      type: Sequelize.ENUM(
        "work-from-home",
        "sick",
        "work-from-office",
        "from-home",
        "from-office",
        "sick-day",
        "clock-out"
      ),
      allowNull: false,
      defaultValue: "work-from-office",
    });

    // Update the existing values in the database
    await queryInterface.sequelize.query(`
      UPDATE logs
      SET type = 'work-from-office'
      WHERE type = 'from-office'
    `);

    await queryInterface.sequelize.query(`
    UPDATE logs set type = 'work-from-home' WHERE type = 'from-home'`);

    await queryInterface.sequelize.query(`UPDATE logs set type = 'sick' WHERE type = 'sick-day'`);
    // get every data with type = clock-out find previous data with the same date and user id and update the clock_out_time, clock_out_latitude, clock_out_longitude
    const logs = await queryInterface.sequelize.query(
      `SELECT * FROM logs WHERE type = 'clock-out'`
    );
    for (const log of logs[0]) {
      const { date, user_id } = log;
      const previousLog = await queryInterface.sequelize.query(
        `SELECT * FROM logs WHERE date = '${date}' AND user_id = '${user_id}' ORDER BY id ASC LIMIT 1`
      );
      if (previousLog[0].length > 0) {
        const previousLogId = previousLog[0][0].id;
        await queryInterface.sequelize.query(
          `UPDATE logs SET clock_out_time = '${log.clock_in_time}', clock_out_latitude = '${log.clock_in_latitude}', clock_out_longitude = '${log.clock_in_longitude}' WHERE id = '${previousLogId}'`
        );
      }
    }

    // delete every data with type = clock-out
    await queryInterface.sequelize.query(`DELETE FROM logs WHERE type = 'clock-out'`);
    // remove from-home from-office sick-day and clock-out from the enum type
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
    await queryInterface.renameColumn("logs", "clock_in_longitude", "longitude");
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
