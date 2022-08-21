import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

const getProductById = createAsyncThunk(
  "product/getProductById",
  async (id) => {
    const response = await productApi.getById(id);
    return response;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: { isLoading: false, product: {} },
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      });
  },
});

const { reducer: productReducer } = productSlice;

export { getProductById };
export default productReducer;
