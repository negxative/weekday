import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

const SearchBox = ({ placeholder, onChange, debounceDelay = 300 }) => {
  // State to manage the search input value
  const [searchValue, setSearchValue] = useState("");

  // Effect to debounce the search input and trigger onChange callback
  useEffect(() => {
    // Set up a timer to delay the onChange callback
    const debounceTimer = setTimeout(() => {
      // Call the onChange callback with the current search value
      onChange?.(searchValue);
    }, debounceDelay);

    // Clear the timer if the search value changes before the delay
    return () => clearTimeout(debounceTimer);
  }, [searchValue, onChange, debounceDelay]);

  // Event handler to update the search value
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Render the search box component
  return (
    <TextField
      label={placeholder} // Placeholder text for the search box
      value={searchValue} // Current value of the search input field
      onChange={handleChange} // Event handler for input value changes
      variant="outlined" // Use outlined style for the text field
      size="small" // Use small size for the text field
      color="success" // Use success color for the text field
    />
  );
};

export default SearchBox;
