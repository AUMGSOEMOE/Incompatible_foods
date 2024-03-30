import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "./slice/food.slice";

export const store = configureStore({
  reducer: {
    food: foodSlice,
  },
});
