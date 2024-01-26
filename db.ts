import { Sequelize } from "sequelize";
import mysql2 from "mysql2";

const env = process.env.NODE_ENV || "development";
const config = require("@/config/config.json")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    dialect: config.dialect,
    dialectModule: mysql2,
  }
);

export default sequelize;
