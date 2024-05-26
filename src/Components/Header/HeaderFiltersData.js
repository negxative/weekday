import _ from "lodash";

// Generate options for the Experience filter dropdown
export const getExperienceFilterOptions = () => {
  const experienceArray = _.range(0, 10).map((el) => {
    return { label: el, value: el };
  });
  // Adding an option for >=10 years of experience
  return [...experienceArray, { label: ">=10 years", value: ">10" }];
};

// Generate options for the Location filter dropdown
export const getLocationFilterOptions = (
  data = { distinctLocationValues: [] }
) => {
  const { distinctLocationValues } = data;
  // Transform distinct location values into dropdown options
  const locationFilterArray = _.toArray(distinctLocationValues).map(
    (location) => {
      return { label: _.startCase(location), value: location };
    }
  );

  return locationFilterArray;
};

// Generate options for the Role filter dropdown
export const getRoleFilterOptions = (data = { distinctRoleValues: [] }) => {
  const { distinctRoleValues } = data;
  // Transform distinct role values into dropdown options
  const roleFilterArray = _.toArray(distinctRoleValues).map((role) => {
    return { label: _.startCase(role), value: role };
  });

  return roleFilterArray;
};

// Generate options for the Work Mode filter dropdown
export const getWorkModeOptions = () => {
  return [
    {
      label: "Remote",
      value: "remote",
    },
    {
      label: "On Site",
      value: "onSite",
    },
    {
      label: "Hybrid",
      value: "hybrid",
    },
  ];
};

// Generate options for the Salary filter dropdown
export const getSalaryFilterOptions = () => {
  const experienceArray = _.range(0, 100, 10).map((el) => {
    return { label: el, value: el };
  });
  // Adding an option for >=100k salary
  return [...experienceArray, { label: ">=100k ", value: ">100" }];
};
