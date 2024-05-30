import Time from "@/app/components/Time";
import UserInfo from "@/app/components/UserInfo";
import { Suspense } from "react";
import Logout from "@/app/components/Logout";
import UserInfoSkeleton from "@/app/_loader/UserInfoSekleton";
import ClockInOut from "@/app/components/ClockInOut";
import { HomeCoordinate } from "@/app/components";
import { FaRegCalendarTimes } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { Link } from "@nextui-org/link";

import getUser from "@/app/libs/getUser";
import { Button, ButtonGroup } from "@nextui-org/button";

const Home = () => {
  const promise = getUser();

  return (
    <main className="min-h-screen w-full bg-white p-4 text-slate-700">
      <div className="mx-auto max-w-md space-y-4">
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
              Profile
            </Button>
            <Button
              variant="bordered"
              color="secondary"
              as={Link}
              href="/home/day-off"
              title="Time Off"
              startContent={<FaRegCalendarTimes />}
            >
              Day Off
            </Button>
          </ButtonGroup>
        </div>
        <div className="flex w-full">
          <div className="grow">
            <Time />
          </div>
          <Logout />
        </div>
        <Suspense fallback={<UserInfoSkeleton />}>
          <UserInfo promise={promise} />
        </Suspense>
        <ClockInOut />
        <HomeCoordinate />
      </div>
    </main>
  );
};
export default Home;
