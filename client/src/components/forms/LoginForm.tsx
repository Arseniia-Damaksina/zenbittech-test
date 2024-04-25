import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginFormData } from "../../types/types";
import Button from "../UI/Button";
import { ButtonVariants } from "../UI/ButtonVariants";
import Input from "./Input";
import { loginUser } from "../../api/authAPI";
import { useAppDispatch } from "../../store/store";
import { toggleRegisterForm } from "../../slices/authSlice";

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      setError("Please, enter the email");
      return;
    }

    if (!formData.password.trim()) {
      setError("Please, enter the password");
      return;
    }

    loginUser(formData);

    try {
      const response = await loginUser(formData);
      localStorage.setItem("token", response.data.token);
      setError("");
      setFormData({
        email: "",
        password: "",
      });
      navigate("/deals");
    } catch (error) {
      setError("Log in failed");
    }
  };

  const handleSignUpClick = () => {
    dispatch(toggleRegisterForm());
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-3/5 text-left text-2xl font-bold font-merriweather my-3">
        Login
      </h1>
      <div className="w-3/5 flex justify-start">
        {error && (
          <p className="text-sm font-lato font-semibold text-red-500 text-left">
            {error}
          </p>
        )}
      </div>

      <form className="w-3/5" onSubmit={handleSubmit}>
        <Input
          type="email"
          label="Email"
          placeholder="Email"
          className="w-full"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          label="Password"
          placeholder="Password"
          className="w-full"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <p className="text-sm font-lato font-semibold my-3 text-secondary text-right hover:underline">
          Forgot password?
        </p>
        <Button
          type="submit"
          className="w-full p-6 mt-8"
          children="Sign In"
          onClick={() => {}}
          variant={ButtonVariants.SECONDARY}
        />
      </form>
      <p className="text-sm font-lato font-semibold my-3">
        Don't have an account?{" "}
        <a
          className="text-secondary hover:underline"
          onClick={handleSignUpClick}
        >
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
