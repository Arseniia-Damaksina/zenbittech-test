interface InputProps {
    type: string;
    label: string;
    placeholder: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({ type, label, className, placeholder }) => {
  return (
    <div className="flex flex-col">
        <label className="font-bold">{label}</label>
        <input type={type} name={type} placeholder={placeholder} className={`bg-inputBg rounded-md py-3 px-6 ${className}`}/>
    </div>
  )
}

export default Input