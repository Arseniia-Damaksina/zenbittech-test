export interface Deal {
  id: number;
  name: string;
  price: number;
  ticketPrice: number;
  yield: string;
  sold: number;
  daysLeft: number;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface DealState {
  deals: Deal[];
  status: "loading" | "succeeded" | "failed" | "";
  error: string | null;
}

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginResponse {
  username: string;
  email: string;
  password: string;
  token: string;
}
