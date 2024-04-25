import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button"; 
import { text } from "../../public/text";
import { ButtonVariants } from "../components/UI/ButtonVariants";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <div className="absolute inset-0 bg-background bg-cover bg-no-repeat bg-center"></div>
      <div className="absolute inset-0 bg-primary opacity-80"></div>
      <div className="w-full absolute inset-0 flex flex-col justify-center items-center text-white">
        <div className="w-2/3 flex flex-col items-center">
          <h1 className="text-6xl">{text.title}</h1>
          <p className="text-center text-2xl my-6">{text.text}</p>
          <Button
            children="Get Started"
            variant={ButtonVariants.TERTIARY}
            onClick={handleNavigate}
            className="p-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
