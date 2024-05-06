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
  type: "from-home" | "from-office" | "sick-day" | "clock-out";
  user_id: number;
  time: string;
  date: string;
  latitude: number;
  longitude: number;
  work: CreationOptional<string[]>;

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
      type: DataTypes.ENUM("from-home", "from-office", "sick-day", "clock-out"),
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
  },
  {
    underscored: true,
  }
);

export default Log;
