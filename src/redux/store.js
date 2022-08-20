import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
const rootReducer = {
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
