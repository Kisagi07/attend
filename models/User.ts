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
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  id: CreationOptional<number>;
  name: string;
  work_id: string;
  password: string;
  role: CreationOptional<"employee" | "admin" | "intern">;
  home_latitude: CreationOptional<number>;
  home_longitude: CreationOptional<number>;
  gender: CreationOptional<"male" | "female">;

  // virtual fields
  totalAbsent?: number;
  totalWorkFromHome?: number;
  todayStatus?: string;

  job_position_id: CreationOptional<number>;

  getLogs: HasManyGetAssociationsMixin<LogModel>;
  createLog: HasManyCreateAssociationMixin<LogModel, "user_id">;
  countLogs: HasManyCountAssociationsMixin;

  job_position?: NonAttribute<JobPositionModel>;
  logs?: NonAttribute<LogModel[]>;
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
    role: DataTypes.ENUM("employee", "admin", "intern"),
    job_position_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "job_positions",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    home_latitude: {
      type: DataTypes.DECIMAL(10, 8),
      get() {
        const rawValue = this.getDataValue(
          "home_latitude"
        ) as unknown as string;
        // retutn as number type
        return parseFloat(rawValue);
      },
    },
    home_longitude: {
      type: DataTypes.DECIMAL(11, 8),
      get() {
        const rawValue = this.getDataValue(
          "home_longitude"
        ) as unknown as string;
        // retutn as number type
        return parseFloat(rawValue);
      },
    },
    totalAbsent: DataTypes.VIRTUAL(DataTypes.INTEGER),
    totalWorkFromHome: DataTypes.VIRTUAL(DataTypes.INTEGER),
    todayStatus: DataTypes.VIRTUAL(DataTypes.STRING),
    gender: {
      type: DataTypes.ENUM("male", "female"),
      defaultValue: "male",
    },
  },
  {
    underscored: true,
  }
);

export default User;
