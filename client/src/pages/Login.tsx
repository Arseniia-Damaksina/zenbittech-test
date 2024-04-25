import Form from "../components/Form/Form";

const Login = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-2/3 h-full bg-background-login bg-cover bg-no-repeat bg-center"></div>
      <div className="w-1/3 flex justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="w-3/5 text-left">Login</h1>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Login;
