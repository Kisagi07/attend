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
}: CProps) => {
  return (
    <div>
      <small className="text-red-400 block">{error}</small>
      <label>{label}:</label>
      <input
        disabled={disabled}
        onChange={({ currentTarget }) =>
          onChange && onChange(currentTarget.value)
        }
        defaultValue={defaultValue}
        value={value}
        id={id}
        type="text"
        className={`${className} rounded w-full p-2 outline-none border-2 border-slate-200 focus:border-sky-400`}
      />
    </div>
  );
};
export default InputText;
