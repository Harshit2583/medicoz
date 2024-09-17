// redux/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const isLoggedInFromStorage =
  sessionStorage.getItem("isLoggedIn") === "true" ||
  localStorage.getItem("isLoggedIn") === "true";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: isLoggedInFromStorage,
    isSignedIn: true,
    isRemember: true,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      if (state.isRemember) {
        localStorage.setItem('isLoggedIn', 'true');
      } else {
        sessionStorage.setItem('isLoggedIn', 'true');
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      if (state.isRemember) {
        localStorage.setItem('isLoggedIn', 'false');
      } else {
        sessionStorage.setItem('isLoggedIn', 'false');
      }
    },
    signIn: (state) => {
      state.isSignedIn = false;
    },
    signOut: (state) => {
      state.isSignedIn = true;
    },
    rememberMe: (state) => {
      state.isRemember = !state.isRemember;
    },
  },
});

export const { login, logout, signIn, signOut, rememberMe } = authSlice.actions;
export default authSlice.reducer;
