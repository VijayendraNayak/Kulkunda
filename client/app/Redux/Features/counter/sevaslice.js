import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sevaName: null,
  error: null,
  loading: false,
};

const sevaSlice = createSlice({
  name: 'seva',
  initialState,
  reducers: {
    setSevaName: (state, action) => {
      state.sevaName = action.payload;
    },
    clearSevaName: (state) => {
      state.sevaName = null;
    },
    setSevaError: (state, action) => {
      state.error = action.payload;
    },
    clearSevaError: (state) => {
      state.error = null;
    },
    setSevaLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setSevaName,
  setSevaData,
  clearSevaData,
  setSevaError,
  clearSevaError,
  setSevaLoading,
} = sevaSlice.actions;

export default sevaSlice.reducer;
