import React, { useEffect, useState } from "react";
import { getSampleJdJSON } from "../Assets/SampleData";
import { useSelector } from "react-redux";
import _ from "lodash";

const data = getSampleJdJSON();
console.log(data);
export const useFilterData = () => {
  const [filteredArray, setFilteredArray] = useState([]);
  const { role, experience, companyName, location, salary } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    const tempFilteredArray = data.filter((jobListing) => {
      const {
        companyName: companyNameInJD,
        jobRole,
        location: jobLocation,
        minExp,
        minJdSalary,
      } = jobListing;

      const matchRole =
        !role || role.length === 0 || (role && role.includes(jobRole));
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

      return (
        matchRole &&
        matchCompanyName &&
        matchSalary &&
        matchLocation &&
        matchExperience
      );
    });

    setFilteredArray(tempFilteredArray);
  }, [role, experience, companyName, location, salary]);

  return { filteredArray };
};
