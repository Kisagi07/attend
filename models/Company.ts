import sequelize from "@/db";
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

interface CompanyModel
  extends Model<
    InferAttributes<CompanyModel>,
    InferCreationAttributes<CompanyModel>
  > {
  id: CreationOptional<number>;
  latitude: number;
  longitude: number;
}

const Company = sequelize.define<CompanyModel>(
  "Company",
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
  },
  {
    tableName: "company",
    underscored: true,
  }
);

export default Company;
