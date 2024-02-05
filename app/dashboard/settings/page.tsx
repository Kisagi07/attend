import SettingOffice from "@/app/components/SettingOffice";
import AttendTolerance from "@/app/components/AttendTolerance";
const SettingPage = () => {
  return (
    <>
      <section className="space-y-4">
        <h1 className="text-xl uppercase font-semibold">Settings</h1>
        <hr />
        <SettingOffice />
        <hr />
        <AttendTolerance />
      </section>
    </>
  );
};
export default SettingPage;
