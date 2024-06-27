import { TeamBgroup, TeamIntern, ActivityTimeline, VisitChart } from "@/app/components";
const Dashboard = () => {
  return (
    <>
      <h1 data-testid="master-heading">Dashboard</h1>
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
