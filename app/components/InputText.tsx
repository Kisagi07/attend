import React from "react";

interface CProps {
  className?: string;
  id?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  value?: string;
  disabled?: boolean;
  label?: string;
  error?: string;
  onBlur?: (value: string) => void;
}
const InputText = ({
  className,
  id,
  defaultValue,
  onChange,
  value,
  disabled,
  label,
  error,
  onBlur,
}: CProps) => {
  return (
    <div>
      <small className="text-red-400 block">{error}</small>
      {label && <label>{label}:</label>}
      <input
        disabled={disabled}
        onChange={({ currentTarget }) => onChange && onChange(currentTarget.value)}
        defaultValue={defaultValue}
        value={value}
        id={id}
        type="text"
        className={`${className} rounded w-full py-1 px-2 outline-none border-2 border-slate-200 focus:border-sky-400`}
        onBlur={({ currentTarget }) => onBlur && onBlur(currentTarget.value)}
      />
    </div>
  );
};
export default InputText;
