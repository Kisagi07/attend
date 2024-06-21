import React from "react";
import clsx from "clsx";

interface PillProps {
  color?: "red" | "blue" | "green" | "yellow";
  children?: React.ReactNode;
}

const Pill: React.FC<PillProps> = ({ color = "blue", children }) => {
  return (
    <span
      className={clsx("rounded-lg px-2 py-1 text-sm ", {
        "bg-red-300 text-red-600": color === "red",
        "bg-blue-300 text-blue-600": color === "blue",
        "bg-green-300 text-green-600": color === "green",
        "bg-yellow-300 text-yellow-600": color === "yellow",
      })}
    >
      {children}
    </span>
  );
};

export default Pill;
