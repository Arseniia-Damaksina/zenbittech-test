import { combineReducers } from "@reduxjs/toolkit";
import dealsReducer from "../slices/dealSlice";
import authReducer from "../slices/authSlice"; 

const rootReducer = combineReducers({
  deals: dealsReducer,
  auth: authReducer, 
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
