import Button from "../UI/Button";
import { ButtonVariants } from "../UI/ButtonVariants";

const App = () => {
  return (
    <header className="w-full h-18 bg-primary flex justify-center items-center">
      <div className="w-8/10 flex justify-end items-center">
        <Button
          children="Sign Up"
          variant={ButtonVariants.PRIMARY}
          onClick={() => {}}
          className="px-3 ml-3"
        />
        <Button
          children="Log In"
          variant={ButtonVariants.SECONDARY}
          onClick={() => {}}
          className="px-3 ml-3"
        />
      </div>
    </header>
  );
};

export default App;
