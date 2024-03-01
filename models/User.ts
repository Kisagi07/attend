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
  NonAttribute,
} from "sequelize";
import Log, { LogModel } from "./Log";
import { JobPositionModel } from "./JobPosition";

export interface UserModel
  extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  id: CreationOptional<number>;
  name: string;
  work_id: string;
  password: string;
  role: CreationOptional<"employee" | "admin">;
  home_latitude: CreationOptional<number>;
  home_longitude: CreationOptional<number>;

  job_position_id: CreationOptional<number>;

  getLogs: HasManyGetAssociationsMixin<LogModel>;
  createLog: HasManyCreateAssociationMixin<LogModel, "user_id">;
  countLogs: HasManyCountAssociationsMixin;

  job_position?: NonAttribute<JobPositionModel>;
}

const User = sequelize.define<UserModel>(
  "users",
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
    role: DataTypes.ENUM("employee", "admin"),
    job_position_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "job_positions",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    home_latitude: DataTypes.DECIMAL(10, 8),
    home_longitude: DataTypes.DECIMAL(11, 8),
  },
  {
    underscored: true,
  }
);

export default User;
