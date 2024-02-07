import { IoIosAddCircleOutline } from "react-icons/io";
const JobPositionPage = () => {
  return (
    <section className="p-4 space-y-4">
      <h1 className="text-lg uppercase font-semibold">Job Position</h1>
      <button className="flex items-center gap-x-2 bg-black hover:bg-gray-950 text-white rounded p-2 ">
        <IoIosAddCircleOutline /> Create
      </button>
    </section>
  );
};
export default JobPositionPage;
