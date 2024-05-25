import React, { useState } from 'react';
import './App.css';
import JobCardsContainer from './Components/JobBoard/JobCardsContainer';
import { getSampleJdJSON } from './Assets/SampleData'
import SelectDropdown from './Components/SelectDropdown/SelectDropdown';
import Header from './Components/Header/Header';
import { dataRefiner } from './Utils/DataRefiner';


const dummyData = [
  { value: 'engineer', label: 'Engineer' },
  { value: 'designer', label: 'Designer' },
  { value: 'manager', label: 'Manager' },
  { value: 'developer', label: 'Developer' }
];

function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
  };
  
  const data=getSampleJdJSON();
  const refinedData=dataRefiner(data);
  return (
    <>
      <Header refinedData={refinedData} />
      <JobCardsContainer data={data} />
    </>
  );
}

export default App;
