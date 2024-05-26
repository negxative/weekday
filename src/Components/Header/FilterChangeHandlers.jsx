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
export const handleExperienceChange = (option, dispatch) => {
  // Implement your logic for handling Experience dropdown change here
  const { value } = option;
  dispatch(setExperience(value));
};

export const handleWorkModeChange = (option, dispatch) => {
  // Implement your logic for handling Work Mode dropdown change here
  dispatch(setMode(valueArrayConstructor(option)));
};

export const handleLocationChange = (option, dispatch) => {
  // Implement your logic for handling Location dropdown change here
  dispatch(setLocation(valueArrayConstructor(option)));
};

export const handleRoleChange = (option, dispatch) => {
  // Implement your logic for handling Role dropdown change here
  dispatch(setRole(valueArrayConstructor(option)));
};

export const handleSalaryChange = (option, dispatch) => {
  // Implement your logic for handling Salary dropdown change here
  const { value } = option;
  dispatch(setSalary(value));
};

export const handleCompanySearch = (searchedValue, dispatch) => {
  // Implement your logic for handling Salary dropdown change here
  dispatch(setCompanyName(searchedValue));
};
