import _ from "lodash";

export const getExperienceFilterOptions = () => {
  const experienceArray = _.range(0, 10).map((el) => {
    return { label: el, value: el };
  });
  return [...experienceArray, { label: ">10 years", value: ">10 years" }];
};

export const getLocationFilterOptions = (
  data = { distinctLocationValues: [] }
) => {
  const { distinctLocationValues } = data;
  const locationFilterArray = _.toArray(distinctLocationValues).map(
    (location) => {
      return { label: _.startCase(location), value: location };
    }
  );

  return locationFilterArray;
};

export const getRoleFilterOptions = (data = { distinctRoleValues: [] }) => {
  const { distinctRoleValues } = data;
  const roleFilterArray = _.toArray(distinctRoleValues).map((role) => {
    return { label: _.startCase(role), value: role };
  });

  return roleFilterArray;
};

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

export const getTechStackOptions = () => {
  const techStackArray = [
    "Python",
    "Java",
    "Golang",
    "Ruby/Rails",
    "C++",
    "Kotlin",
    "C#",
    "GraphQL",
  ];
};

export const getSalaryFilterOptions = () => {
  const experienceArray = _.range(0, 100, 10).map((el) => {
    return { label: el, value: el };
  });
  return [...experienceArray, { label: ">100 ", value: ">100" }];
};
