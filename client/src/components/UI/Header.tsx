import Button from "../UI/Button";
import { ButtonTypes } from "../UI/ButtonTypes";

const App = () => {
  return (
    <header className="w-full h-18 bg-primary flex justify-center items-center">
      <div className="w-9/10 flex justify-end items-center">
        <Button
          children="Sign Up"
          type={ButtonTypes.PRIMARY}
          onClick={() => {}}
        />
        <Button
          children="Log In"
          type={ButtonTypes.SECONDARY}
          onClick={() => {}}
        />
      </div>
    </header>
  );
};

export default App;
