"use server";
import Time from "@/app/components/Time";
import UserInfo from "@/app/components/UserInfo";
import HomeOptions from "@/app/components/HomeOptions";
import { Suspense } from "react";
import Logout from "@/app/components/Logout";
import ClockInOut from "@/app/components/ClockInOut";
import { FaRegCalendarTimes } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import Link from "next/link";
import { Skeleton } from "@heroui/skeleton";

import getUser from "@/app/libs/getUser";
import { Button, ButtonGroup } from "@heroui/button";

const Home = () => {
  const promise = getUser();

  return (
    <>
      <section className="mx-auto max-w-md space-y-4">
        <div className="flex">
          <ButtonGroup>
            <Button
              variant="bordered"
              color="secondary"
              as={Link}
              href="/home/profile"
              title="Profile"
              startContent={<ImProfile />}
            >
              Profil
            </Button>
            <Button
              variant="bordered"
              color="secondary"
              as={Link}
              href="/home/day-off"
              title="Time Off"
              startContent={<FaRegCalendarTimes />}
            >
              Cuti
            </Button>
          </ButtonGroup>
        </div>
        <div className="flex w-full">
          <div className="grow">
            <Time />
          </div>
          <Logout />
        </div>
        <Suspense fallback={<Skeleton className="rounded w-full h-28" />}>
          <UserInfo promise={promise} />
        </Suspense>
        <ClockInOut />
        <HomeOptions />
      </section>
    </>
  );
};
export default Home;
