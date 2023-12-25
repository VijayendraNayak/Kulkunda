// phoneSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: null,
  error: null,
  loading: false,
};

const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    clearPhoneNumber: (state) => {
      state.phoneNumber = null;
    },
    setPhoneError: (state, action) => {
      state.error = action.payload;
    },
    clearPhoneError: (state) => {
      state.error = null;
    },
    setPhoneLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setPhoneNumber,
  clearPhoneNumber,
  setPhoneError,
  clearPhoneError,
  setPhoneLoading,
} = phoneSlice.actions;

export default phoneSlice.reducer;
