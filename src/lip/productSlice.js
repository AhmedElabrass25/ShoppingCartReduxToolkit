import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let initialState = { products: [], loading: false, error: null };
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      let { data } = await axios("https://fakestoreapi.com/products");
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch products");
    }
  }
);
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Products
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.error = null;
      state.loading = true;
    }),
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.products = action.payload;
      }),
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.products = [];
        state.loading = false;
      });
  },
});
export let productReducer = productSlice.reducer;
