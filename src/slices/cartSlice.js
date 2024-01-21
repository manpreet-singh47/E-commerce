import { createSlice, current, original } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(
        action.payload
        // id: action.payload.id,
        // name: action.payload.title,
        // description: action.payload.description,
        // price: action.payload.price,
        // image: action.payload.images[0],
      );
      // console.log(state);
    },
    removeFromCart: () => {},
  },
});

export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;
