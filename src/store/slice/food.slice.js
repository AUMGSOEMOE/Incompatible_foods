import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: null,
  error: false,
};

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.data = null;
      state.error = false;
    },
    success: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    },
    error: (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { error, loading, success } = authSlice.actions;
export default authSlice.reducer;
