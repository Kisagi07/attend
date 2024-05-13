import sequelize from "@/db";

import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export interface TimelineModel
  extends Model<
    InferAttributes<TimelineModel>,
    InferCreationAttributes<TimelineModel>
  > {
  id: CreationOptional<number>;
  title: string;
  description: string;
  type: CreationOptional<"changed" | "removed" | "new" | "updated">;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
}

const Timeline = sequelize.define<TimelineModel>(
  "timelines",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("changed", "removed", "new", "updated"),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    underscored: true,
  }
);

export default Timeline;
