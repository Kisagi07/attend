import sequelize from "@/db";
import {
  BelongsToGetAssociationMixin,
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from "sequelize";
import { UserModel } from "./User";
import User from "./User";

export interface LogModel
  extends Model<InferAttributes<LogModel>, InferCreationAttributes<LogModel>> {
  id: CreationOptional<number>;
  type: CreationOptional<"work-from-office" | "work-from-home" | "sick">;
  user_id: number;
  work: CreationOptional<string[]>;
  clock_in_time: string;
  clock_in_latitude: number;
  clock_in_longitude: number;
  clock_out_time: CreationOptional<string>;
  clock_out_latitude: CreationOptional<number>;
  clock_out_longitude: CreationOptional<number>;
  date: Date;

  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;

  getUser: BelongsToGetAssociationMixin<UserModel>;

  user?: NonAttribute<UserModel>;
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
      type: DataTypes.ENUM("work-from-office", "work-from-home", "sick"),
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
    clock_in_time: {
      type: DataTypes.TIME,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    clock_in_latitude: {
      type: DataTypes.DECIMAL(10, 8),
    },
    clock_in_longitude: {
      type: DataTypes.DECIMAL(11, 8),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    work: {
      type: DataTypes.JSON,
      get() {
        if (typeof this.getDataValue("work") === "string") {
          return JSON.parse(this.getDataValue("work") as unknown as string);
        } else if (Array.isArray(this.getDataValue("work"))) {
          return this.getDataValue("work");
        } else {
          return [];
        }
      },
    },
    clock_out_time: {
      type: DataTypes.TIME,
    },
    clock_out_latitude: {
      type: DataTypes.DECIMAL(10, 8),
    },
    clock_out_longitude: {
      type: DataTypes.DECIMAL(11, 8),
    },
  },
  {
    underscored: true,
  }
);

export default Log;
