const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("users", [
      {
        name: "Kizuke",
        work_id: "ID001",
        password: await bcrypt.hash("yut6gb23", 10),
        job_position: "Manager",
        today_shift: "08:00 - 16:00",
        role: "admin",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Tane",
        work_id: "ID002",
        password: await bcrypt.hash("yut6gb23", 10),
        job_position: "Designer",
        today_shift: "08:00 - 16:00",
        role: "employee",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
