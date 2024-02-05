import sequelize from "@/db";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

export interface CompanyModel
  extends Model<
    InferAttributes<CompanyModel>,
    InferCreationAttributes<CompanyModel>
  > {
  id: CreationOptional<number>;
  latitude: number;
  longitude: number;
  tolerance_active: CreationOptional<boolean>;
  tolerance_time: CreationOptional<number>;
}

const Company = sequelize.define<CompanyModel>(
  "company",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: false,
      get() {
        return +this.getDataValue("latitude");
      },
    },
    longitude: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: false,
      get() {
        return +this.getDataValue("longitude");
      },
    },
    tolerance_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    tolerance_time: {
      type: DataTypes.INTEGER,
      defaultValue: 30,
      allowNull: false,
    },
  },
  {
    tableName: "company",
    underscored: true,
  }
);

export default Company;
