import {
  setCompanyName,
  setExperience,
  setLocation,
  setMode,
  setRole,
  setSalary,
} from "../../Store/FiltersSlice";

const valueArrayConstructor = (option) =>
  option.map((curOption) => curOption.value);

// filterChangeHandlers.js
export const handleExperienceChange = (option, dispatch, action) => {
  // Implement your logic for handling Experience dropdown change here
  if (action === "clear") dispatch(setExperience(0));
  else dispatch(setExperience(option?.value ? option.value : 0));
};

export const handleWorkModeChange = (option, dispatch, action) => {
  // Implement your logic for handling Work Mode dropdown change here
  action === "clear"
    ? dispatch(setMode([]))
    : dispatch(setMode(valueArrayConstructor(option)));
};

export const handleLocationChange = (option, dispatch, action) => {
  // Implement your logic for handling Location dropdown change here
  action === "clear"
    ? dispatch(setLocation([]))
    : dispatch(setLocation(valueArrayConstructor(option)));
};

export const handleRoleChange = (option, dispatch, action) => {
  // Implement your logic for handling Role dropdown change here
  action === "clear"
    ? dispatch(setRole([]))
    : dispatch(setRole(valueArrayConstructor(option)));
};

export const handleSalaryChange = (option, dispatch, action) => {
  // Implement your logic for handling Salary dropdown change here
  if (action === "clear") dispatch(setSalary(0));
  else dispatch(setSalary(option?.value));
};

export const handleCompanySearch = (searchedValue, dispatch) => {
  // Implement your logic for handling Salary dropdown change here
  dispatch(setCompanyName(searchedValue));
};
