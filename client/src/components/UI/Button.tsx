import { ButtonVariants } from "./ButtonVariants";

type ButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant: ButtonVariants;
  type?: "submit" | "reset" | "button" | undefined;
};

const Button = ({
  children,
  onClick,
  className = "",
  variant,
  type,
}: ButtonProps) => {
  
  const ButtonVariantStyles = {
    [ButtonVariants.PRIMARY]: "bg-primary border border-secondary text-secondary font-bold h-10 w-40 rounded-md flex justify-center items-center",
    [ButtonVariants.SECONDARY]: "bg-secondary text-white font-bold h-10 w-40 rounded-md flex justify-center items-center",
    [ButtonVariants.TERTIARY]: "bg-transparent border border-white text-white font-bold h-10 w-40 rounded-md flex justify-center items-center"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${ButtonVariantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
