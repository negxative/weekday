import React from "react";
import { Box } from "@mui/material";
import SelectDropdown from "../SelectDropdown/SelectDropdown";
import {
  getRoleFilterOptions,
  getLocationFilterOptions,
  getExperienceFilterOptions,
  getSalaryFilterOptions,
  getWorkModeOptions,
} from "./HeaderFiltersData";
import {
  handleExperienceChange,
  handleWorkModeChange,
  handleLocationChange,
  handleRoleChange,
  handleSalaryChange,
  handleCompanySearch,
} from "./FilterChangeHandlers";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ refinedData }) => {
  const dispatch = useDispatch();
  const filterObject = useSelector((state) => state.filters);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: "20px",
        padding: 3,
      }}
    >
      <SelectDropdown
        placeholder="Experience"
        options={getExperienceFilterOptions()}
        onChange={(option) => handleExperienceChange(option, dispatch)}
      />
      <SelectDropdown
        placeholder="Work Mode"
        isMulti
        options={getWorkModeOptions()}
        onChange={(option) => handleWorkModeChange(option, dispatch)}
      />
      <SelectDropdown
        placeholder="Location"
        isMulti
        options={getLocationFilterOptions(refinedData)}
        onChange={(option) => handleLocationChange(option, dispatch)}
      />
      <SelectDropdown
        placeholder="Role"
        isMulti
        options={getRoleFilterOptions(refinedData)}
        onChange={(option) => handleRoleChange(option, dispatch)}
      />
      <SelectDropdown
        placeholder="Minimum Salary"
        options={getSalaryFilterOptions()}
        onChange={(option) => handleSalaryChange(option, dispatch)}
      />
      <SearchBox
        placeholder="Search Company Name"
        onChange={(option) => handleCompanySearch(option, dispatch)}
      />
    </Box>
  );
};

export default Header;
