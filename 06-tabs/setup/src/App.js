import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs);
        setIsLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  if(isLoading){
    return <div className = "section loading">
          <h1>Loading...</h1>
    </div> 
    
  } 

  const{company,dates,duties,title} = jobs[value];
  return <section className = "section">
      <div className="title">
        <h2>Experience</h2>
        <div className = "underline"></div>
      </div>
      <div className = "jobs-center">
        <div className="btn-container">
          {
            jobs.map((duty,index)=>{
              const {} = duty;
              return <button key={duty.id} className = "job-btn" onClick = {()=>{setValue(index)}} >{duty.company}</button>
            })
          }
        </div>
      <article className = "job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className = 'job-date'>{dates}</p>
        {duties.map((duty,index)=>{
          return <div key={index} className = "job-desc">
            <FaAngleDoubleRight/>
            <p >
              {duty}
            </p>
          </div>
        })}
      </article>
      </div>
      
  </section>
}

export default App
