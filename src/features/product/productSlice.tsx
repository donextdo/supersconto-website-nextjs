import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./product";
import productList from "../product/data.json";
import axios from "axios";
// import baseUrl from "../../../utils/baseUrl";
import { http } from "../../../utils/request";

interface ProductsState {
  products: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
};
const PRODUCTS_URL = `/product/getAll/`;

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await http.get("/catelog/item");
    console.log(response.data)
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    updateProductQuantity: (
      state,
      action: PayloadAction<{ productId: string; count: number }>
    ) => {
      const product = state.products.find(
        (p) => p._id === action.payload.productId
      );
      if (product) {
        product.count = action.payload.count;

      }

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export const { setProducts, updateProductQuantity } = productSlice.actions;

export default productSlice.reducer;
