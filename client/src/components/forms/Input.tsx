interface InputProps {
  type: string;
  label: string;
  placeholder: string;
  className?: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  className,
  placeholder,
  name,
  value,
  onChange
}) => {
  return (
    <div className="flex flex-col mb-3">
      <label className="font-merriweather font-bold">{label}</label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`font-merriweather bg-inputBg rounded-md py-3 px-6 ${className}`}
      />
    </div>
  );
};

export default Input;
