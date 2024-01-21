import { createSlice, current } from "@reduxjs/toolkit";
import Data from "../Data/Data";

const productSlice = createSlice({
  name: "products",
  initialState: {
    wishlist: [],
    cart: [],
    data: Data,
    totalPrice: 0,
    images: [
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/21/2.jpg",
      "https://cdn.dummyjson.com/product-images/18/4.jpg",
      "https://cdn.dummyjson.com/product-images/16/3.jpg",
      "https://cdn.dummyjson.com/product-images/15/3.jpg",
    ],
  },
  reducers: {
    addToCart: (state, action) => {
      let sameValue = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (sameValue >= 0) {
        state.cart[sameValue].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }

      state.totalPrice = state.cart.reduce((initial, currentVal) => {
        let { price, quantity } = currentVal;
        initial += price * quantity;

        return initial;
      }, 0);
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);

      state.totalPrice = state.cart.reduce((initial, currentVal) => {
        let { price, quantity } = currentVal;
        initial += price * quantity;

        return initial;
      }, 0);
    },
    decreaseQuantity: (state, action) => {
      let id = state.cart.findIndex((item) => item.id === action.payload.id);
      if (id >= 0) {
        state.cart[id].quantity -= 1 && state.cart[id].quantity > 1;
      }

      state.totalPrice = state.cart.reduce((initial, currentVal) => {
        let { price, quantity } = currentVal;
        initial += price * quantity;
        return initial;
      }, 0);
    },

    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const productsActions = productSlice.actions;

export default productSlice.reducer;
