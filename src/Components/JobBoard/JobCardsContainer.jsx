import React from "react";
import { Container } from "@mui/material";
import { JobCard } from "../JobCard/JobCard";
import useInfiniteScroll from "../../Hooks/useInfiniteScroll";

const JobCardsContainer = ({ data }) => {
  // Fetch items and reference for infinite scrolling
  const { items, lastItemRef } = useInfiniteScroll(data, 10, 10);

  // Render job cards container
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "space-start",
        flexWrap: "wrap",
        gap: 4,
      }}
      role="main"
      aria-label="Job Listings"
    >
      {/* Map through items and render job cards */}
      {items.map((job, index) => (
        <JobCard
          key={index}
          job={job}
          index={index}
          // Set reference for last item for infinite scrolling
          ref={index === items.length - 1 ? lastItemRef : null}
        />
      ))}
    </Container>
  );
};

export default JobCardsContainer;
