import Button from "../UI/Button";
import { ButtonVariants } from "../UI/ButtonVariants";
import Input from "./Input";

const Form = () => {
  return (
    <form className="w-3/5">
      <Input
        type="email"
        label="Email"
        placeholder="Email"
        className="w-full"
      />
      <Input
        type="password"
        label="Password"
        placeholder="Password"
        className="w-full"
      />
      <Button
        type="submit"
        className="w-full p-6"
        children="Sign In"
        onClick={() => {}}
        variant={ButtonVariants.SECONDARY}
      />
    </form>
  );
};

export default Form;
