import React from "react";
import useSWR from "swr";
import { fetcher } from "@/app/helper";

const CompanyHoliday: React.FC = () => {
  const { data, error } = useSWR("/api/company-holiday", fetcher);

  const [companyHoliday, setCompanyHoliday] = React.useState([]);

  return (
    <section className="space-y-2">
      <h1>Company Holiday</h1>
      <hr />
    </section>
  );
};

export default CompanyHoliday;
