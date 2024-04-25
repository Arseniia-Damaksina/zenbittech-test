import { ButtonTypes } from "./ButtonTypes";

type ButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type: ButtonTypes;
};

const Button = ({
  children,
  onClick,
  className = "",
  type,
}: ButtonProps) => {
  
  const ButtonTypeStyles = {
    [ButtonTypes.PRIMARY]: "bg-primary border border-secondary text-secondary font-bold h-10 w-40 rounded-md px-3 ml-3 flex justify-center items-center",
    [ButtonTypes.SECONDARY]: "bg-secondary text-white font-bold h-10 w-40 rounded-md px-3 ml-3 flex justify-center items-center",
    [ButtonTypes.TERTIARY]: "bg-transparent border border-white text-white font-bold h-10 w-40 rounded-md px-3 ml-3 flex justify-center items-center"
  };

  return (
    <button
      onClick={onClick}
      className={`${ButtonTypeStyles[type]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
