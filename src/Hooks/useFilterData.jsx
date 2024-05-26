import React, { useEffect, useState } from "react";
import { getSampleJdJSON } from "../Assets/SampleData";
import { useSelector } from "react-redux";
import _ from "lodash";

const data = getSampleJdJSON();

export const useFilterData = () => {
  const [filteredArray, setFilteredArray] = useState([]);
  const { role, experience, companyName, location, salary } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    const tempFilteredArray = [];
    data.forEach((jobListing) => {
      const {
        companyName: companyNameInJD,
        jobRole,
        location: jobLocation,
        minExp,
        minJdSalary,
      } = jobListing;

      const matchRole =
        role.length > 0 && jobRole ? role.includes(jobRole) : true;
      const matchLocation =
        location.length > 0 && jobLocation
          ? location.includes(jobLocation)
          : true;
      const matchExperience = !!minExp
        ? experience === ">10"
          ? minExp >= 10
          : experience <= minExp
        : true;
      const matchSalary = !!salary
        ? salary === ">100"
          ? minJdSalary >= 100
          : minJdSalary >= salary
        : true;
      const matchCompanyName = !!companyName
        ? _.includes(_.lowerCase(companyNameInJD), _.lowerCase(companyName))
        : true;

      if (
        matchRole &&
        matchCompanyName &&
        matchSalary &&
        matchLocation &&
        matchExperience
      )
        tempFilteredArray.push(jobListing);
    });
    setFilteredArray(tempFilteredArray);
  }, [data, role, experience, companyName, location, salary]);
  return { filteredArray };
};
