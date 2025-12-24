import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/axiosInstance';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (filters = {}) => {
    let queryParts = [];
    
    if (filters.title) queryParts.push(`title=${filters.title}`);
    if (filters.price) queryParts.push(`price=${filters.price}`);
    if (filters.price_min) queryParts.push(`price_min=${filters.price_min}`);
    if (filters.price_max) queryParts.push(`price_max=${filters.price_max}`);
    if (filters.categoryId) queryParts.push(`categoryId=${filters.categoryId}`);

    const queryString = queryParts.length > 0 ? `?${queryParts.join('&')}` : '';
    const response = await axiosInstance.get(`/products${queryString}`);
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: { items: [], cart: [], status: 'idle', error: null },
  reducers: {
    addToCart: (state, action) => {
      const uniqueItem = { ...action.payload, cartId: Date.now() + Math.random() };
      state.cart.push(uniqueItem);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.cartId !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;