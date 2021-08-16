import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

const [tours,setTours] = useState([]);
const [isLoading, setIsLoading] = useState(true);

const fetchTours = async () => {
  try{
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    console.log(tours);
    setIsLoading(false);
  }
  catch(error){
      console.log(error);
  }
}


useEffect(()=>{

    fetchTours();

}, []);


const deleteTour = (id) => {
  const newTours = tours.filter((tour)=> tour.id !==id)
  setTours(newTours);
}

if(isLoading === true){
  return <>
    <Loading/>
  </>
}

if(tours.length === 0){
  return <>
  <main>
  <h3 className = "title">Looks like you're not going on a tour</h3>
  <section className="loading" >
    <button className = "btn" onClick={()=>fetchTours()}>Refresh</button>
  </section>
  
  </main>
    
  </>
}
  return <> 

    <main>
      <Tours tours = {tours} deleteTour = {deleteTour}></Tours>
    </main>
  </>
}

export default App
