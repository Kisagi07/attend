"use client";
import clsx from "clsx";
import { FC, useState, useEffect, useRef } from "react";

interface SelectProps {
  label?: string;
  placeholder?: string;
  options?: Option[];
  name?: string;
  id?: string;
  optionDirection?: "top" | "bottom";
  onChange?: (option: Option) => void;
  error?: boolean;
  value?: Option | undefined;
  required?: boolean;
}
const Select: FC<SelectProps> = ({
  label,
  placeholder,
  options = [],
  name,
  id,
  optionDirection = "bottom",
  onChange,
  error,
  value,
  required,
}) => {
  const [showOption, setShowOption] = useState<boolean>(false);
  const optionRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const handleShowOption = () => {
    setShowOption(!showOption);
  };

  const handleDynamicCloseOption = (e: MouseEvent) => {
    if (!optionRef.current!.contains(e.target as Node)) setShowOption(false);
  };

  const handleOptionClicked = (option: Option) => {
    if (onChange) onChange(option);
    setShowOption(false);
  };

  useEffect(() => {
    if (showOption) {
      document.addEventListener("click", handleDynamicCloseOption);

      return () => document.removeEventListener("click", handleDynamicCloseOption);
    }
  }, [showOption]);

  return (
    <div className="w-full">
      <label>
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={clsx("border bg-white w-full border-slate-200  rounded relative", {
          "!border-red-500": error,
        })}
      >
        <h4 onClick={handleShowOption} className="text-slate-700 select-none cursor-pointer p-2">
          {value?.label || placeholder || "Select one option..."}
        </h4>
        <div
          ref={optionRef}
          className={clsx(
            "absolute z-10 left-0 w-full bg-white border border-slate-200 shadow-md",
            {
              hidden: !showOption,
            },
            {
              "bottom-0 translate-y-full": optionDirection === "bottom",
            },
            {
              "top-0 -translate-y-full": optionDirection === "top",
            }
          )}
        >
          {options.length === 0 ? (
            <h5 className="italic p-4 text-slate-400">No Option</h5>
          ) : (
            <ul>
              {options.map((option) => (
                <li
                  onClick={() => handleOptionClicked(option)}
                  key={option.value}
                  className="hover:bg-slate-200 p-4 cursor-pointer"
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <select
        ref={selectRef}
        className="absolute w-0 h-0 opacity-0 top-[-99999px] left-[-9999ppx]"
        name={name}
        id={id}
      ></select>
    </div>
  );
};
export default Select;
