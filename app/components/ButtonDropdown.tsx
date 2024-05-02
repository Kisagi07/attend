"use client";
import { throws } from "assert";
import React, { useEffect, useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";

interface Option {
  label: string;
  className?: string;
}

interface ButtonDropdownProps {
  options?: Option[];
  label?: string;
  className?: string;
  onClick?: (value: string) => void;
  disabled?: boolean;
  loading?: boolean;
  activeButton?: (option: Option) => void;
  buttonChanged?: () => void;
}

const ButtonDropdown: React.FC<ButtonDropdownProps> = ({
  options,
  label,
  className,
  onClick,
  disabled,
  loading,
  activeButton,
  buttonChanged,
}) => {
  // component error handling
  if ((!options || options.length === 0) && !label) {
    throw Error("'label' need to be passed when no options are passed");
  }
  //component states
  const [showOptions, setShowOptions] = useState(false);
  const [animate, setAnimate] = useState("animate-fade-down");
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  // component functions
  const handleDropdownClick = () => {
    if (showOptions) {
      setAnimate("animate-fade-up");
      setTimeout(() => setShowOptions(false), 150);
    } else {
      setAnimate("animate-fade-down");
      setShowOptions(true);
    }
  };

  const optionsExists = () => {
    return options && options.length > 0;
  };

  const handleOptionClick = (index: number) => {
    setActiveOptionIndex(index);
    handleDropdownClick();
  };

  const handleButtonClick = () => {
    if (!onClick) return;
    if (optionsExists()) {
      onClick(options![activeOptionIndex].label);
    } else {
      onClick(label!);
    }
  };

  useEffect(() => {
    setActiveOptionIndex(0);
  }, [options]);

  return (
    <div className="flex relative z-[1]">
      <button
        disabled={disabled}
        onClick={handleButtonClick}
        className={`${
          optionsExists() ? options![activeOptionIndex].className : className
        }  transition-colors rounded-l w-full px-3 py-2`}
      >
        {loading ? "Loading..." : optionsExists() ? options![activeOptionIndex].label : label}
      </button>
      {options && options.length > 0 && (
        <>
          <button
            disabled={disabled}
            onClick={handleDropdownClick}
            className="hover:bg-slate-200 bg-slate-100 transition-colors rounded-r px-3 py-2"
          >
            <FaChevronCircleDown />{" "}
          </button>
          <div
            className={`${
              showOptions ? "block" : "hidden"
            } ${animate} absolute z-[0] bottom-0 bg-white shadow border border-slate-300 w-full translate-y-full rounded-b`}
          >
            <ul>
              {options.map((option, index) => (
                <li
                  key={option.label}
                  onClick={() => handleOptionClick(index)}
                  className="px-3 py-2 hover:bg-slate-200 cursor-pointer transition-colors"
                >
                  {option.label}
                </li>
              ))}
              {/* <li className="px-3 py-2 hover:bg-slate-200 cursor-pointer transition-colors">
                Clock-in
              </li>
              <li className="px-3 py-2 hover:bg-slate-200 cursor-pointer transition-colors">
                Sick Day
              </li> */}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
export default ButtonDropdown;
