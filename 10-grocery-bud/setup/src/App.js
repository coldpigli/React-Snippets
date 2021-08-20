import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

const handleSubmit = (e) => {
  e.preventDefault();
}

  return <section className = "section-center">
    <form className="grocery-form" onSubmit = {handleSubmit}>
      <Alert/>
      <h3>Grocery List</h3>
      <div className = "form-control">
        <input type="text"></input>
        <button type ="submit" className = "submit-btn" placeholder = "e.g: Milk, Cheese">
          {}
        </button>
      </div>
    </form>
    <div className = "grocery-container">
      <List/>
      <button className="clear-btn">Clear item</button>
    </div>
  </section>
}

export default App
