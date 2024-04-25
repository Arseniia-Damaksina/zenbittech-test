import Button from "../UI/Button";
import { ButtonVariants } from "../UI/ButtonVariants";
import Input from "./Input";

const LoginForm = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-3/5 text-left">Login</h1>
      <form className="w-3/5">
        <Input
          type="email"
          label="Email"
          placeholder="Email"
          className="w-full"
          name="email"
        />
        <Input
          type="password"
          label="Password"
          placeholder="Password"
          className="w-full"
          name="password"
        />
        <Button
          type="submit"
          className="w-full p-6"
          children="Sign In"
          onClick={() => {}}
          variant={ButtonVariants.SECONDARY}
        />
      </form>
    </div>
  );
};

export default LoginForm;
