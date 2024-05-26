import { createSlice } from "@reduxjs/toolkit";

// Initial state for the filters
const initialState = {
  experience: -1,
  mode: [],
  location: [],
  role: [],
  salary: -1,
  companyName: "",
};

// Create a slice for managing filters
const filtersSlice = createSlice({
  name: "filtersSlice", // Name of the slice
  initialState, // Initial state for the slice
  reducers: {
    // Reducer functions to update each filter state
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

// Extract action creators and reducer from the slice
export const {
  setExperience,
  setLocation,
  setCompanyName,
  setMode,
  setRole,
  setSalary,
} = filtersSlice.actions;
export default filtersSlice.reducer;
