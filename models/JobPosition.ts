import sequelize from "@/db";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export interface JobPositionModel
  extends Model<
    InferAttributes<JobPositionModel>,
    InferCreationAttributes<JobPositionModel>
  > {
  id: CreationOptional<number>;
  name: string;
  shift_start: string;
  shift_end: string;
}

const JobPosition = sequelize.define<JobPositionModel>(
  "job_positions",
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
    shift_start: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shift_end: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

export default JobPosition;
