import { useLocation, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import { ButtonVariants } from "../UI/ButtonVariants";
import { toggleLoginForm, toggleRegisterForm } from "../../slices/authSlice"; 
import { useAppDispatch } from "../../store/store";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch(); 

  const handleNavigateRegister = () => {
    dispatch(toggleRegisterForm());
    navigate("/auth"); 
  };

  const handleNavigateLogin = () => {
    dispatch(dispatch(toggleLoginForm()));
    navigate("/auth"); 
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <header className="w-full h-18 bg-primary flex justify-center items-center">
        <div className="w-8/10 flex justify-end items-center">
          {location.pathname === "/" && (
            <>
              <Button
                children="Sign Up"
                variant={ButtonVariants.PRIMARY}
                onClick={handleNavigateRegister} 
                className="px-3 ml-3"
              />
              <Button
                children="Log In"
                variant={ButtonVariants.SECONDARY}
                onClick={handleNavigateLogin} 
                className="px-3 ml-3"
              />
            </>
          )}
          {location.pathname === "/deals" && (
            <>
              <Button
                children="Log out"
                variant={ButtonVariants.SECONDARY}
                onClick={handleLogout}
                className="px-3 ml-3"
              />
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
