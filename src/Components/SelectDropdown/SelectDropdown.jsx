import React from "react";
import Select from "react-select";

const SelectDropdown = ({ options, isMulti, onChange, value, placeholder }) => {
  // Render a dropdown using react-select library
  return (
    <Select
      options={options} // List of options for the dropdown
      isMulti={isMulti} // Allow multiple selections if true
      onChange={onChange} // Callback function invoked when selection changes
      value={value} // Currently selected value(s)
      placeholder={placeholder} // Placeholder text for the dropdown
      isClearable // Allow clearing the selection
      style={{ minWidth: "300px" }} // Custom styles to set minimum width
    />
  );
};

export default SelectDropdown;
