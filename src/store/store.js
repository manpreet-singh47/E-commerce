import { configureStore } from "@reduxjs/toolkit";
import productsSlices from "../slices/productsSlices";
import getDetails from "../slices/getDetails";

const store = configureStore({
  reducer: {
    products: productsSlices,
    productDetails: getDetails,
  },
});

export default store;
