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
      styles={{
        container: (base) => ({
          ...base,
        }),
        control: (base) => ({
          ...base,
          borderRadius: "4px",
          borderColor: "#ccc",
          minHeight: "35px",
        }),
        multiValue: (base) => ({
          ...base,
          backgroundColor: "#f3f3f3",
        }),
        multiValueLabel: (base) => ({
          ...base,
          color: "#333",
        }),
        multiValueRemove: (base) => ({
          ...base,
          color: "#888",
          ":hover": {
            backgroundColor: "#ccc",
            color: "#333",
          },
        }),
      }}
    />
  );
};

export default SelectDropdown;
