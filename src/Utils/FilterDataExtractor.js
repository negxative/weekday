import { getSampleJdJSON } from "../Assets/SampleData";

// Function to extract distinct role and location values from sample job data
export const FilterDataExtractor = () => {
  // Get sample job data
  const data = getSampleJdJSON();

  // Initialize sets to store distinct role and location values
  const distinctRoleValues = new Set();
  const distinctLocationValues = new Set();

  // Iterate over each job in the data
  data.forEach((job) => {
    // Extract role and location from the job
    const { jobRole, location } = job;

    // Add role and location to their respective sets
    distinctRoleValues.add(jobRole);
    distinctLocationValues.add(location);
  });

  // Return the sets containing distinct role and location values
  return { distinctRoleValues, distinctLocationValues };
};
