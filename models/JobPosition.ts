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
  work_day: CreationOptional<string>;
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
    work_day: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "1,2,3,4,5",
      get(): (string | undefined)[] {
        const arrayValue = this.getDataValue("work_day").split(",");
        const numberDay = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const fullWordDay = arrayValue.map((value: string) => {
          const numericValue = parseInt(value);
          const day = numberDay[numericValue];
          if (day) {
            return day;
          }
        });
        return fullWordDay;
      },
    },
  },
  {
    underscored: true,
  }
);

export default JobPosition;
