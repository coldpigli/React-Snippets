import React, { useState } from 'react';
import data from './data';
function App() {
  


  
  return (
        <section className = "section-center"> 
          <h3>Get modern day Lorem Ipsum</h3>
          <form className = "lorem-form">
              <label htmlFor="no_of_paragraphs">No Of Paragraphs</label>
              <input type="number" name="no_of_paragraphs" id="no_of_paragraphs"></input>
              <button type = "submit" className = "btn">Beer Me!</button>
          </form>
          <article className = "lorem-text">
            <p>Hello this is a lorem ipsum generator </p>
          </article>
        </section>
    )
}

export default App;
