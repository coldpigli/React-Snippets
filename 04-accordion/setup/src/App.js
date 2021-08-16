import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return <main>
    <section className = "container">
      <h3>Questions and Answers about Login</h3>
      <section>
      {
          data.map((question)=>{
            const {id,title,info} = question;
            return <SingleQuestion key = {id} title = {title} info = {info}></SingleQuestion>
          })
        }
      </section>
        
    </section>
    
  </main>
}

export default App;
