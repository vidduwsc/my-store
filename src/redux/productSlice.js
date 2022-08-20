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
  initialState: {},
  reducers: {},
  extraReducers: (buider) => {
    buider.addCase(getProductById.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

const { reducer: productReducer } = productSlice;

export { getProductById };
export default productReducer;
