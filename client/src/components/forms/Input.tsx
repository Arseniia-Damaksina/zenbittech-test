interface InputProps {
    type: string;
    label: string;
    placeholder: string;
    className?: string;
    name: string;
}

const Input: React.FC<InputProps> = ({ type, label, className, placeholder, name }) => {
  return (
    <div className="flex flex-col">
        <label className="font-bold">{label}</label>
        <input type={type} name={name} placeholder={placeholder} className={`bg-inputBg rounded-md py-3 px-6 ${className}`}/>
    </div>
  )
}

export default Input