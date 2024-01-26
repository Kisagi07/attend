import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";
import sequelize from "@/db";

interface CompanyModel
  extends Model<
    InferAttributes<CompanyModel>,
    InferCreationAttributes<CompanyModel>
  > {
  latitude: number;
  longitude: number;
}

const Company = sequelize.define<CompanyModel>(
  "company",
  {
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL,
  },
  {
    tableName: "company",
  }
);

export default Company;
