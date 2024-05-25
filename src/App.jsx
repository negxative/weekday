import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setData } from './Store/ContentSlice'
import JobCardsContainer from './Components/JobBoard/JobCardsContainer'
import { getSampleJdJSON } from './Assets/SampleData'

function App() {
  const data=getSampleJdJSON();
  console.log(data)
  return (
    <>
      <JobCardsContainer data={data}/>
    </>
  )
}

export default App