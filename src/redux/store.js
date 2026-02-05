import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./pages/pagereducer";
import cartReducer from "./carts/cartsreducer";
import productReducer from "./products/productReducer";

export const store = configureStore({
  reducer: {
    pages: pageReducer,
    carts: cartReducer,
    products: productReducer,
  },
  devTools: true,
});

export default store;