import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "food",
  initialState: {
    loading: false,
    data: null,
    error: false,
  },
  reducers: {
    processing: (state, action) => {
      state.loading = true;
      state.data = null;
    },
    finish: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    wrong: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { processing, finish, wrong } = foodSlice.actions;
export default foodSlice.reducer;
