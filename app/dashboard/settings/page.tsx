import SettingOffice from "@/app/components/SettingOffice";
import getCompany from "@/app/libs/getCompany";
import { CompanyModel } from "@/models/Company";

const SettingPage = () => {
  return (
    <>
      <section className="space-y-4">
        <h1 className="text-xl uppercase font-semibold">Settings</h1>
        <hr />
        <SettingOffice />
      </section>
    </>
  );
};
export default SettingPage;
