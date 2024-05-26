import { configureStore } from "@reduxjs/toolkit";
import ContentSlice from "./ContentSlice";
import FiltersSlice from "./FiltersSlice";

export const store = configureStore({
  reducer: {
    content: ContentSlice,
    filters: FiltersSlice,
  },
});
