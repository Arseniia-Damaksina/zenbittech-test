import { useSelector } from "react-redux";
import { RootState } from "../store/rootReducer"; 
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisteForm";

const Auth = () => {
  const isLoginForm = useSelector((state: RootState) => state.auth.isLoginForm); 
  const isRegisterForm = useSelector((state: RootState) => state.auth.isRegisterForm); 

  return (
    <div className="w-full h-screen flex">
      <div className="w-0 sm:w-1/2 lg:w-2/3 h-full bg-background-login bg-cover bg-no-repeat bg-center"></div>
      <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col justify-center items-center">
        {isLoginForm && <LoginForm />} 
        {isRegisterForm && <RegisterForm />} 
      </div>
    </div>
  );
};

export default Auth;
