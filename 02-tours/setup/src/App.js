import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

const [tours,setTours] = useState([]);

const fetchTours = async () => {
  try{
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    console.log(tours);
  }
  catch(error){
      console.log(error);
  }
}


useEffect(()=>{

    fetchTours();

}, []);


  return <> 
    <main>
      <Tours tours = {tours}></Tours>
    </main>
  </>
}

export default App
