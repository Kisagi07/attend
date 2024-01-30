import User from "./User";
import Log from "./Log";
import Company from "./Company";

Log.belongsTo(User, {
  foreignKey: "user_id",
});
User.hasMany(Log, {
  foreignKey: "user_id",
});

export { User, Log, Company };
