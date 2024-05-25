import React from 'react';
import { Box } from '@mui/material';
import SelectDropdown from '../SelectDropdown/SelectDropdown';
import { getRoleFilterOptions, getLocationFilterOptions, getExperienceFilterOptions, getSalaryFilterOptions, getWorkModeOptions } from './HeaderFiltersData';
import {
  handleExperienceChange,
  handleWorkModeChange,
  handleLocationChange,
  handleRoleChange,
  handleSalaryChange
} from './FilterChangeHandlers';

const Header = ({ refinedData }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        gap: '20px',
        padding: 3
      }}
    >
      <SelectDropdown placeholder="Experience" options={getExperienceFilterOptions()} onChange={handleExperienceChange} />
      <SelectDropdown placeholder="Work Mode" options={getWorkModeOptions()} onChange={handleWorkModeChange} />
      <SelectDropdown placeholder="Location" options={getLocationFilterOptions(refinedData)} onChange={handleLocationChange} />
      <SelectDropdown placeholder="Role" options={getRoleFilterOptions(refinedData)} onChange={handleRoleChange} />
      <SelectDropdown placeholder="Minimum Salary" options={getSalaryFilterOptions()} onChange={handleSalaryChange} />
    </Box>
  );
};

export default Header;
