import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  experience: -1,
  mode: [],
  location: [],
  role: [],
  salary: -1,
  companyName: "",
};

const filtersSlice = createSlice({
  name: "filtersSlice",
  initialState,
  reducers: {
    setExperience: (state, payload) => {
      state.experience = payload.payload;
    },
    setMode: (state, payload) => {
      state.mode = payload.payload;
    },
    setLocation: (state, payload) => {
      state.location = payload.payload;
    },
    setRole: (state, payload) => {
      state.role = payload.payload;
    },
    setSalary: (state, payload) => {
      state.salary = payload.payload;
    },
    setCompanyName: (state, payload) => {
      state.companyName = payload.payload;
    },
  },
});

export const {
  setExperience,
  setLocation,
  setCompanyName,
  setMode,
  setRole,
  setSalary,
} = filtersSlice.actions;
export default filtersSlice.reducer;
