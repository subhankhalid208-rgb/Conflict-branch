import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    decrementQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload);
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        }
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, decrementQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;