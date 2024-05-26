import React from "react";
import { Container } from "@mui/material";
import { JobCard } from "../JobCard/JobCard";
import useInfiniteScroll from "../../Hooks/useInfiniteScroll";

const JobCardsContainer = ({ data }) => {
  const { items, lastItemRef } = useInfiniteScroll(data, 10, 10);
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "space-start",
        flexWrap: "wrap",
      }}
    >
      {items.map((job, index) => (
        <JobCard
          key={index}
          job={job}
          index={index}
          ref={index === items.length - 1 ? lastItemRef : null}
        />
      ))}
    </Container>
  );
};

export default JobCardsContainer;
