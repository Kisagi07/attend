import sequelize from "@/db";
import {
  CreationOptional,
  DataTypes,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import Log, { LogModel } from "./Log";
import bcrypt from "bcrypt";

export interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  id: CreationOptional<number>;
  name: string;
  work_id: string;
  password: string;
  job_position: string;
  today_shift: string;

  getLogs: HasManyGetAssociationsMixin<LogModel>;
  createLog: HasManyCreateAssociationMixin<LogModel, "user_id">;
  countLogs: HasManyCountAssociationsMixin;
}

const User = sequelize.define<UserModel>(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    work_id: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
    },
    job_position: DataTypes.STRING,
    today_shift: DataTypes.STRING,
  },
  {
    underscored: true,
  }
);

export default User;
