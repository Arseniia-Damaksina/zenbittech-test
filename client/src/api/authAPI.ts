import axios, { AxiosResponse } from "axios";
import { LoginFormData, LoginResponse, RegisterFormData } from "../types/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const registerUser = async (
  user: RegisterFormData
): Promise<AxiosResponse<RegisterFormData>> => {
  try {
    const response = await axios.post<RegisterFormData>(
      `${API_BASE_URL}/auth/register`,
      user
    );
    return response;
  } catch (error) {
    throw new Error("Failed to register a user");
  }
};

export const loginUser = async (
  user: LoginFormData
): Promise<AxiosResponse<LoginResponse>> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${API_BASE_URL}/auth/login`,
      user
    );

    return response;
  } catch (error) {
    throw new Error("Failed to register a user");
  }
};