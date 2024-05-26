import React from "react";
import "./App.css";
import JobCardsContainer from "./Components/JobBoard/JobCardsContainer";
import Header from "./Components/Header/Header";
import { FilterDataExtractor } from "./Utils/FilterDataExtractor";
import { useFilterData } from "./Hooks/useFilterData";

const extractedData = FilterDataExtractor();

function App() {
  const { filteredArray: filteredData = [] } = useFilterData();
  return (
    <>
      <Header refinedData={extractedData} />
      <JobCardsContainer data={filteredData} />
    </>
  );
}

export default App;
