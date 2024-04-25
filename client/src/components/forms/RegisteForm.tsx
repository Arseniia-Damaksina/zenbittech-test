import Button from "../UI/Button";
import { ButtonVariants } from "../UI/ButtonVariants";
import Input from "./Input";

const RegisterForm = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
    <h1 className="w-3/5 text-left">Register</h1>
    <form className="w-3/5">
      <Input
        type="text"
        label="Name"
        placeholder="Name"
        className="w-full"
        name="username"
      />
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
        children="Sign Up"
        onClick={() => {}}
        variant={ButtonVariants.SECONDARY}
      />
    </form>
    </div>
  );
};

export default RegisterForm;
