import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Deal, DealState } from "../types/types";
import { RootState } from "../store/rootReducer";
import { fetchDeals } from './../api/dealAPI';

const initialState: DealState = {
  deals: [],
  status: "",
  error: null,
};

export const fetchDealsAsync = createAsyncThunk(
  "deals/fetchDeals",
  async () => {
    try {
      const response = await fetchDeals();
      return response.data as Deal[];
    } catch (error) {
      throw new Error("Failed to fetch deals");
    }
  }
);

const dealsSlice = createSlice({
    name: "deals",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchDealsAsync.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchDealsAsync.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.deals = action.payload;
        })
        .addCase(fetchDealsAsync.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message as string | null;
        })
    },
});

export const selectDeals = (state: RootState) =>
  state.deals.deals;

export default dealsSlice.reducer;