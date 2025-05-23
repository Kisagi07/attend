"use client";
import RequestLeave from "@/app/components/RequestLeave";
import UserDayOffTable from "@/app/components/UserDayOffTable";
import React from "react";
import { Button } from "@heroui/button";
import Link from "next/link";
import clsx from "clsx";
const Page = () => {
  const [showRequest, setShowRequest] = React.useState<boolean>(false);

  return (
    <main className="mx-auto max-w-xl space-y-4 p-4">
      <section>
        <Button as={Link} href="/home" color="secondary" variant="ghost">
          Kembali
        </Button>
      </section>
      <section>
        <Button
          variant="flat"
          color="default"
          size="sm"
          onClick={() => setShowRequest(!showRequest)}
        >
          Ajukan Hari Cuti
        </Button>
        <div
          className={clsx("overflow-hidden transition-all duration-500", {
            "max-h-0": !showRequest,
            "max-h-[500px]": showRequest,
          })}
        >
          <RequestLeave />
        </div>
      </section>
      <UserDayOffTable />
    </main>
  );
};

export default Page;
