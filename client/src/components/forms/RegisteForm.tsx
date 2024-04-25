import { useState } from "react";
import Button from "../UI/Button";
import { ButtonVariants } from "../UI/ButtonVariants";
import Input from "./Input";
import { RegisterFormData } from "../../types/types";
import { registerUser } from "../../api/authAPI";
import { useAppDispatch } from "../../store/store";
import { toggleLoginForm } from "../../slices/authSlice"; 

const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.username.trim()) {
      setError("Please, enter your name");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please, enter the email");
      return;
    }

    if (!formData.password.trim()) {
      setError("Please, enter the password");
      return;
    }

    registerUser(formData);

    try {
      await registerUser(formData);
      setError("");
      setFormData({
        username: "",
        email: "",
        password: "",
      });
      dispatch(toggleLoginForm());
    } catch (error) {
      setError("Registration failed");
    }
  };

  const handleLogInClick = () => {
    dispatch(toggleLoginForm());
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="w-3/5 text-left text-2xl font-bold font-merriweather my-3">
        Register
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
          type="text"
          label="Name"
          placeholder="Name"
          className="w-full"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
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
        <Button
          type="submit"
          className="w-full p-6 mt-8"
          children="Sign Up"
          onClick={() => {}}
          variant={ButtonVariants.SECONDARY}
        />
      </form>
      <p className="text-sm font-lato font-semibold my-3">
        Already have an account?{" "}
        <a className="text-secondary hover:underline" onClick={handleLogInClick}>Log In</a>
      </p>
    </div>
  );
};

export default RegisterForm;
