import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

const getProducts = createAsyncThunk(
  "products/getProducts",
  async ({ type, limit, searchValue }) => {
    const params = { type, limit, searchValue };
    const response = await productApi.getAll(params);
    return response;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: { isLoading: false, products: [] },
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      });
  },
});

const { reducer: productsReducer } = productsSlice;

export { getProducts };
export default productsReducer;
