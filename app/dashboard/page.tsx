import { TeamBgroup, TeamIntern, ActivityTimeline, VisitChart } from "@/app/components";
const Dashboard = () => {
  return (
    <>
      <TeamBgroup />
      <TeamIntern />
      <div className="md:grid md:gap-4 md:grid-cols-5">
        <ActivityTimeline />
        <VisitChart />
      </div>
    </>
  );
};
export default Dashboard;
