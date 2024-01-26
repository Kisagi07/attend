import Time from "@/app/components/Time";
import UserInfo from "@/app/components/UserInfo";
import { Suspense } from "react";
import Logout from "@/app/components/Logout";
import UserInfoSkeleton from "@/app/_loader/UserInfoSekleton";
import ClockInOut from "@/app/components/ClockInOut";

import getUser from "@/app/libs/getUser";

const Home = () => {
  const promise = getUser();

  return (
    <main className="bg-white min-h-screen w-full text-slate-700 p-4">
      <div className="max-w-md mx-auto space-y-4">
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
      </div>
    </main>
  );
};
export default Home;
