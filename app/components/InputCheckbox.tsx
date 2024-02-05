"use client";
import { useState, useEffect } from "react";
import clsx from "clsx";
interface CProps {
  onChange?: (active: boolean) => void;
  checked?: boolean;
}
const InputCheckbox = ({ onChange, checked = false }: CProps) => {
  const [active, setActive] = useState<boolean>(checked);
  const handleClick = () => {
    setActive(!active);
  };
  useEffect(() => {
    onChange?.(active);
  }, [active]);
  return (
    <div
      onClick={handleClick}
      className={clsx(
        "border-2 group w-6 h-6 rounded p-0.5  cursor-pointer hover:border-emerald-400 transition-colors",
        {
          "border-emerald-400": active,
          "border-slate-200": !active,
        }
      )}
    >
      <input className="absolute w-0 h-0 opacity-0" />
      <div
        className={clsx("w-full h-full rounded transition-colors", {
          "bg-emerald-400": active,
          "bg-transparent": !active,
        })}
      ></div>
    </div>
  );
};
export default InputCheckbox;
