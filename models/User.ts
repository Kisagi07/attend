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

export interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  id: CreationOptional<number>;
  name: string;
  work_id: string;
  password: string;
  role: CreationOptional<"employee" | "admin">;

  job_position_id: CreationOptional<number>;

  getLogs: HasManyGetAssociationsMixin<LogModel>;
  createLog: HasManyCreateAssociationMixin<LogModel, "user_id">;
  countLogs: HasManyCountAssociationsMixin;
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
  },
  {
    underscored: true,
  }
);

export default User;
