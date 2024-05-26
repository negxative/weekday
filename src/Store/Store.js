import { configureStore } from "@reduxjs/toolkit";
import FiltersSlice from "./FiltersSlice";

export const store = configureStore({
  reducer: {
    filters: FiltersSlice,
  },
});
