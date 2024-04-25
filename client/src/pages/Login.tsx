import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisteForm";

const Login = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-2/3 h-full bg-background-login bg-cover bg-no-repeat bg-center"></div>
      <div className="w-1/3 flex flex-col justify-center items-center">
        <RegisterForm />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
