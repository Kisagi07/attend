import sequelize from "@/db";
import { BelongsToGetAssociationMixin, CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, NonAttribute } from "sequelize";
import { UserModel } from "./User";
import User from "./User";

export interface LogModel extends Model<InferAttributes<LogModel>, InferCreationAttributes<LogModel>> {
  id: CreationOptional<number>;
  type: "clock-in" | "clock-out" | "sick";
  user_id: number;
  time: string;
  date: string;
  latitude: number;
  longitude: number;

  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;

  getUser: BelongsToGetAssociationMixin<UserModel>;

  user: NonAttribute<UserModel>;
}

const Log = sequelize.define<LogModel>(
  "logs",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.ENUM("clock-in", "clock-out", "sick"),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    time: {
      type: DataTypes.TIME,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 8),
    },
    longitude: {
      type: DataTypes.DECIMAL(11, 8),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    underscored: true,
  }
);

export default Log;
