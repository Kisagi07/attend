import User from "./User";
import Log from "./Log";
import Company from "./Company";
import JobPosition from "./JobPosition";

Log.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});
User.hasMany(Log, {
  foreignKey: "user_id",
});

User.belongsTo(JobPosition, {
  foreignKey: "job_position_id",
});
JobPosition.hasMany(User, {
  foreignKey: "job_position_id",
});

export { User, Log, Company, JobPosition };
