import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartApi from "../api/cartApi";

const getCart = createAsyncThunk("cart/getCart", async () => {
  const response = await cartApi.getAll();
  return response;
});

const addToCart = createAsyncThunk("cart/addToCart", async (productData) => {
  const response = await cartApi.post(productData);
  return response;
});

const updateCart = createAsyncThunk("cart/updateCart", async (productData) => {
  const response = await cartApi.put(productData);
  return response;
});

const deleteProductInCart = createAsyncThunk(
  "cart/deleteProductInCart",
  async (productData) => {
    const response = await cartApi.delete(productData);
    return response;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {},
  extraReducers: (buider) => {
    buider
      .addCase(getCart.fulfilled, (state, action) => {
        state = action.payload;
        return state;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state = action.payload;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state = action.payload;
      })
      .addCase(deleteProductInCart.fulfilled, (state, action) => {
        state = action.payload;
      });
  },
});

const { reducer: cartReducer } = cartSlice;

export { getCart, addToCart, updateCart, deleteProductInCart };
export default cartReducer;
