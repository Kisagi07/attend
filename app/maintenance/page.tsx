import { GrHostMaintenance } from "react-icons/gr";
import { FaGear } from "react-icons/fa6";
const Page = () => {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center flex-col p-4 gap-4">
      <div className="relative w-full max-w-sm mx-auto">
        <FaGear className="text-yellow-300 text-5xl animate-spin absolute top-0 right-0" />
        <FaGear className="text-yellow-300 text-5xl animate-spin absolute left-0 top-1/2" />
        <GrHostMaintenance className="text-9xl text-red-500 mx-auto block" />
        <hr className="h-4 bg-blue-500 w-full mt-4" />
      </div>
      <h1 className="text-4xl font-bold text-center">Under Maintenance</h1>
    </main>
  );
};

export default Page;
