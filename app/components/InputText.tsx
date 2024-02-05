interface CProps {
  className?: string;
  id?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  value?: string;
  disabled?: boolean;
}
const InputText = ({
  className,
  id,
  defaultValue,
  onChange,
  value,
  disabled,
}: CProps) => {
  return (
    <input
      disabled={disabled}
      onChange={({ currentTarget }) =>
        onChange && onChange(currentTarget.value)
      }
      defaultValue={defaultValue}
      value={value}
      id={id}
      type="text"
      className={`${className} rounded w-full p-2 outline-none border border-slate-200 focus:border-slate-400`}
    />
  );
};
export default InputText;
