import axios, { AxiosResponse } from 'axios';
import { Deal } from '../types/types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchDeals = async (): Promise<AxiosResponse<Deal[]>> => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Unauthorized");
    }

    const response = await axios.get<Deal[]>(`${API_BASE_URL}/deals`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    throw new Error("Failed to fetch deals");
  }
};
