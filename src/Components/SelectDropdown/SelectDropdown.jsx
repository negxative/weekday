import React from "react";
import Select from "react-select";

const SelectDropdown = ({ options, isMulti, onChange, value, placeholder }) => {
  return (
    <Select
      options={options}
      isMulti={isMulti}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      isClearable
      style={{ minWidth: "300px" }}
    />
  );
};

export default SelectDropdown;
