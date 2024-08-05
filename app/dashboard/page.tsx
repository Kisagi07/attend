import { TeamBgroup, TeamIntern, ActivityTimeline, VisitChart } from "@/app/components";
import MonthlySpendings from "@/app/components/MonthlySpendings";
const Dashboard = () => {
  return (
    <>
      <TeamBgroup />
      <TeamIntern />
      <section className="md:grid md:gap-4 md:grid-cols-5">
        <ActivityTimeline />
        <VisitChart />
      </section>
      <section>
        <MonthlySpendings />
      </section>
    </>
  );
};
export default Dashboard;
