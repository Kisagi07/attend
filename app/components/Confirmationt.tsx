import clsx from "clsx";
interface CProps {}
const Confirmation = () => {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-10 flex items-center justify-center",
        {}
      )}
    >
      <div className="w-full h-full bg-gray-900/75">
        <div className="relative flex flex-col min-w-0 p-4 max-w-sm break-words w-full mb-6 shadow-lg rounded-lg bg-white">
          <div className="flex justify-end gap-x-4">
            <button className="bg-slate-100 p-2">Cancel</button>
            <button className="bg-slate-950 p-2">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Confirmation;
