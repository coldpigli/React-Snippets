import React, { useState } from 'react';
import data from './data';
function App() {
  

const[paraCount, setParaCount] = useState(0);

const[paras, setParas] = useState([]);

const handleOnChange = (e) => {
      setParaCount(e.target.value);
}

const handleSubmit = (e) => {
      e.preventDefault();
      let amount = parseInt(paraCount);
      setParas(data.slice(0,amount));
}


  return (
        <section className = "section-center"> 
          <h3>Get modern day Lorem Ipsum</h3>
          <form className = "lorem-form" onSubmit = {handleSubmit}>
              <label htmlFor="no_of_paragraphs">No Of Paragraphs</label>
              <input type="number" 
              name="no_of_paragraphs" 
              id="no_of_paragraphs" 
              value = {paraCount}
              onChange = {handleOnChange}
              min = '0'
              max = '8'></input>
              <button type = "submit" className = "btn">Beer Me!</button>
          </form>
          <article className = "lorem-text">
            {
              paras.map((para,index)=>{
                return <p key={index}>{para}</p>
              })
            }
          </article>
        </section>
    )
}

export default App;
