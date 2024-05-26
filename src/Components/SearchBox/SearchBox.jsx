import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

const SearchBox = ({ placeholder, onChange, debounceDelay = 300 }) => {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onChange?.(searchValue);
    }, debounceDelay);
    return () => clearTimeout(debounceTimer);
  }, [searchValue, onChange]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <TextField
      label={placeholder}
      value={searchValue}
      onChange={handleChange}
      variant="outlined"
      size="small"
      color="success"
    />
  );
};

export default SearchBox;
