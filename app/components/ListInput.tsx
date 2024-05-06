"use client";
import React, { useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { TbTextPlus } from "react-icons/tb";

type Props = {
  placeholder?: string;
  label?: string;
  items?: string[];
  addItem?: (item: string) => void;
  removeItem?: (item: string) => void;
};

const ListInput = (props: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const triggerAddItem = () => {
    if (inputRef.current?.value) {
      props.addItem && props.addItem(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      triggerAddItem();
    }
  };

  return (
    <div>
      <label className="font-medium">{props.label}</label>
      <div className="flex w-full">
        <input
          ref={inputRef}
          type="text"
          className="outline-none w-full px-2 py-1 border border-gray-200"
          placeholder={props.placeholder}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={triggerAddItem}
          className="bg-blue-500 flex justify-center items-center w-8 hover:bg-blue-600 text-white"
        >
          <TbTextPlus />
        </button>
      </div>
      <ul className="space-y-2 mt-2">
        {props.items?.map((item) => (
          <li key={item} className="bg-gray-100 flex justify-between items-stretch">
            <div className="flex items-center gap-1 text-green-500">
              <GoDotFill className="w-6 h-6 ms-2" />
              <span className="p-1 font-medium">{item}</span>
            </div>
            <button
              type="button"
              title="Remove"
              className="bg-red-400 text-white aspect-square  shrink-0 px-2 hover:bg-red-500"
              onClick={() => props.removeItem && props.removeItem(item)}
            >
              <FaXmark />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListInput;
