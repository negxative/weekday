import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const contentSlice = createSlice({
  name: "contentSlice",
  initialState,
  reducers: {
    setData: (state, payload) => {
      state.data = payload.payload;
    },
  },
});

export const { setData } = contentSlice.actions;
export default contentSlice.reducer;
