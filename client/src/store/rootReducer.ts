import { combineReducers } from "@reduxjs/toolkit";
import dealsReducer from "../slices/dealSlice";

const rootReducer = combineReducers({
    deals: dealsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;