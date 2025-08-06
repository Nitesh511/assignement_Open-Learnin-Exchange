// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/authSlice";
import { authApiSlice } from "./auth/authApiSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApiSlice.middleware),
});

export default store;
