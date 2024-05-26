import React, { useEffect, useState } from "react";
import { getSampleJdJSON } from "../Assets/SampleData";
import { useSelector } from "react-redux";
import _ from "lodash";

// Get sample job data
const data = getSampleJdJSON();

// Custom hook to filter job data based on filter criteria
export const useFilterData = () => {
  // State to store filtered job data
  const [filteredArray, setFilteredArray] = useState([]);

  // Get filter criteria from Redux store
  const { role, experience, companyName, location, salary } = useSelector(
    (state) => state.filters
  );

  // Effect to filter job data when filter criteria change
  useEffect(() => {
    // Filter the job data based on filter criteria
    const tempFilteredArray = data.filter((jobListing) => {
      const {
        companyName: companyNameInJD,
        jobRole,
        location: jobLocation,
        minExp,
        minJdSalary,
      } = jobListing;

      // Check if job listing matches filter criteria
      const matchRole = !role || role.length === 0 || role.includes(jobRole);
      const matchLocation =
        !location ||
        location.length === 0 ||
        (jobLocation && location.includes(jobLocation));
      const matchExperience =
        experience == null ||
        experience === -1 ||
        (minExp &&
          (experience === ">10" ? minExp >= 10 : experience <= minExp));
      const matchSalary =
        salary == null ||
        salary === -1 ||
        (minJdSalary &&
          (salary === ">100" ? minJdSalary >= 100 : minJdSalary >= salary));
      const matchCompanyName =
        !companyName ||
        _.includes(_.lowerCase(companyNameInJD), _.lowerCase(companyName));

      // Return true if all filter criteria match
      return (
        matchRole &&
        matchCompanyName &&
        matchSalary &&
        matchLocation &&
        matchExperience
      );
    });

    // Update the filtered job data
    setFilteredArray(tempFilteredArray);
  }, [role, experience, companyName, location, salary]);

  // Return the filtered job data
  return { filteredArray };
};
