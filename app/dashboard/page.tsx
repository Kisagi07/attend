import { TeamBgroup, TeamIntern, ActivityTimeline, VisitChart } from "@/app/components";
import MonthlySpendings from "@/app/components/MonthlySpendings";
import LatestFoodDrinkCost from "../components/LatestFoodDrinkCost";
const Dashboard = () => {
  return (
    <>
      <TeamBgroup />
      <TeamIntern />
      <section className="md:grid md:gap-4 md:grid-cols-5 space-y-0">
        <ActivityTimeline />
        <VisitChart />
      </section>
      {/* <section className="lg:flex lg:gap-4 max-w-full mt-6">
        <MonthlySpendings />
        <LatestFoodDrinkCost />
      </section> */}
    </>
  );
};
export default Dashboard;
