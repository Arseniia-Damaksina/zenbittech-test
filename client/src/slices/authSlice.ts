import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isLoginForm: boolean;
  isRegisterForm: boolean;
}

const initialState: AuthState = {
  isLoginForm: true, 
  isRegisterForm: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleLoginForm: (state) => {
      state.isLoginForm = true;
      state.isRegisterForm = false;
    },
    toggleRegisterForm: (state) => {
      state.isLoginForm = false;
      state.isRegisterForm = true;
    },
  },
});

export const { toggleLoginForm, toggleRegisterForm } = authSlice.actions;
export default authSlice.reducer;
