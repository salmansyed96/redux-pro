import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: null, // Add an error field to the state
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
      state.error = null; // Clear any previous errors
    },
    fetchProductsFailure(state, action) {
      state.error = action.payload;
    }
  }
});

export const { fetchProducts, fetchProductsFailure } = productSlice.actions;
export default productSlice.reducer;

// Import statements go here

export function getProducts() {
  return async function getProductsThunk(dispatch, getState) {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error("Error fetching products"); // Throw an error for non-OK response
      }
      const data = await response.json();
      
      dispatch(fetchProducts(data));
    } catch (error) {
      // Dispatch the fetchProductsFailure action on error
      dispatch(fetchProductsFailure(error.message));
      console.error("Error fetching products:", error);
    }
  };
}
