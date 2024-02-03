import clsx from "clsx";
import { FC } from "react";
interface CProps {
  show?: boolean;
  text?: string;
  title?: string;
  onClose?: (show: boolean) => void;
  onConfirm?: () => void;
}
const Confirmation: FC<CProps> = ({
  show,
  text,
  title,
  onClose,
  onConfirm,
}) => {
  return (
    <div
      className={clsx(
        "fixed top-0 !m-0 left-0 w-full h-full z-50 bg-black/75 justify-center items-center hidden",
        {
          "!flex ": show,
        }
      )}
    >
      <div className="max-w-sm bg-white rounded p-8">
        <h5 className="font-bold text-lg">{title || "Confirm this action?"}</h5>
        <p className="mt-2 mb-8 text-sm font-semibold">
          {text || "Are you sure you want to do this?"}
        </p>
        <div className="flex justify-end">
          <button
            onClick={() => onClose && onClose(false)}
            className="bg-slate-100 p-2 hover:bg-slate-200"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onClose && onClose(false);
              onConfirm && onConfirm();
            }}
            className="bg-emerald-400 p-2 ms-4 hover:bg-emerald-500 text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
export default Confirmation;
