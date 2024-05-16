import sequelize from "@/db";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export interface HolidayModel
  extends Model<InferAttributes<HolidayModel>, InferCreationAttributes<HolidayModel>> {
  id: CreationOptional<number>;
  name: string;
  date: Date;
  createdAt: CreationOptional<Date>;
  updatedAt: CreationOptional<Date>;
}

const Holiday = sequelize.define<HolidayModel>(
  "holidays",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
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

export default Holiday;
