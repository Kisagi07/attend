import clsx from "clsx";
import { FC } from "react";
import { Button } from "@heroui/button";
interface CProps {
  show?: boolean;
  text?: string;
  title?: string;
  onClose?: (show: boolean) => void;
  onConfirm?: () => void;
}
const Confirmation: FC<CProps> = ({ show, text, title, onClose, onConfirm }) => {
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
        <div className="flex justify-end gap-2">
          <Button variant="flat" color="default" onClick={() => onClose?.(false)}>
            Cancel
          </Button>
          <Button
            variant="flat"
            color="success"
            onClick={() => {
              onClose?.(false);
              onConfirm?.();
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Confirmation;
