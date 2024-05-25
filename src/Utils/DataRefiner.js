export const dataRefiner = (data) => {
  const distinctRoleValues = new Set();
  const distinctLocationValues = new Set();
  data.forEach((job) => {
    const { jobRole, location } = job;
    distinctRoleValues.add(jobRole);
    distinctLocationValues.add(location);
  });
  console.log("sets", distinctRoleValues, distinctLocationValues);
  return { distinctRoleValues, distinctLocationValues };
};
