import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "../components/productSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice
    
  },
});

export default store;
