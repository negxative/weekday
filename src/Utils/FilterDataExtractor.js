import { getSampleJdJSON } from "../Assets/SampleData";

export const FilterDataExtractor = () => {
  const data = getSampleJdJSON();
  const distinctRoleValues = new Set();
  const distinctLocationValues = new Set();
  data.forEach((job) => {
    const { jobRole, location } = job;
    distinctRoleValues.add(jobRole);
    distinctLocationValues.add(location);
  });
  return { distinctRoleValues, distinctLocationValues };
};
