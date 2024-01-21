import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data/Data";

const data = {
  product: null,
};

const getDetails = createSlice({
  name: "getDetails",
  initialState: data,
  reducers: {
    getDetails: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const getDetailsActions = getDetails.actions;

export default getDetails.reducer;
