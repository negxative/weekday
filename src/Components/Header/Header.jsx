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
  // Rendering header with filter options
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
      role="banner"
      aria-label="Filters Section"
    >
      {/* Select dropdown for Experience filter */}
      <SelectDropdown
        placeholder="Experience"
        options={getExperienceFilterOptions()}
        onChange={(option, action) =>
          handleExperienceChange(option, dispatch, action)
        }
      />
      {/* Select dropdown for Work Mode filter */}
      <SelectDropdown
        placeholder="Work Mode"
        isMulti
        options={getWorkModeOptions()}
        onChange={(option, action) =>
          handleWorkModeChange(option, dispatch, action)
        }
      />
      {/* Select dropdown for Location filter */}
      <SelectDropdown
        placeholder="Location"
        isMulti
        options={getLocationFilterOptions(refinedData)}
        onChange={(option, action) =>
          handleLocationChange(option, dispatch, action)
        }
      />
      {/* Select dropdown for Role filter */}
      <SelectDropdown
        placeholder="Role"
        isMulti
        options={getRoleFilterOptions(refinedData)}
        onChange={(option, action) =>
          handleRoleChange(option, dispatch, action)
        }
      />
      {/* Select dropdown for Salary filter */}
      <SelectDropdown
        placeholder="Minimum Salary"
        options={getSalaryFilterOptions()}
        onChange={(option, action) =>
          handleSalaryChange(option, dispatch, action)
        }
      />
      {/* Search box for filtering by Company Name */}
      <SearchBox
        placeholder="Search Company Name"
        onChange={(option) => handleCompanySearch(option, dispatch)}
      />
      {/* Select dropdown for Tech Stack filter */}
      <SelectDropdown placeholder="Tech Stack" options={[]} />
    </Box>
  );
};

export default Header;
