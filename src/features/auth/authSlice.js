import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null,
  users: JSON.parse(localStorage.getItem('users')) || [],
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const exists = state.users.find(u => u.email === action.payload.email);
      
      if (exists) {
        state.error = "User with this email already exists!";
        return;
      }
      const updatedUsers = [...state.users, action.payload];
      state.users = updatedUsers;
      state.error = null;
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      
      console.log("New user registered. Total users in Lahore database:", updatedUsers.length);
    },

    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const matchedUser = state.users.find(
        (u) => u.email === email && u.password === password
      );

      if (matchedUser) {
        state.token = "subhan-secure-token-786"; 
        localStorage.setItem('token', state.token);
        state.error = null;
        console.log("Login successful! Welcome back,", matchedUser.name);
      } else {
        state.error = "Invalid credentials. Please check your email/password or register.";
      }
    },

    logout: (state) => {
      state.token = null;
      state.error = null; 
      localStorage.removeItem('token');
      console.log("User logged out.");
    },

    clearError: (state) => {
      state.error = null;
    }
  },
});

export const { registerUser, loginUser, logout, clearError } = authSlice.actions;
export default authSlice.reducer;