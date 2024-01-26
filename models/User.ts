import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  HasManyCreateAssociationMixin,
  HasManyHasAssociationMixin,
} from "sequelize";
import sequelize from "@/db";

interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  name: string;
  work_id: string;
  password: string;
  job_position: string;
  today_shift: string;
  id: CreationOptional<number>;
}

const User = sequelize.define<UserModel>("User", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  work_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  job_position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  today_shift: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
