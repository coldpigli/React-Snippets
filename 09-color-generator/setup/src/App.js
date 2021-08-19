import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [inputText, setInputText] = useState("")
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState([]);


  const handleOnSubmit = (e) => {
    e.preventDefault();
    try{
      
      let colors = new Values(inputText).all(5);
      let rgbValues = colors.map((color)=> color.rgb);
      setColorList(rgbValues);
    }
    catch{
      setError(true);
    }
  };

    return <>
      <section  className = "container">
        <h3>Color-Bomb</h3>
        <form onSubmit = {handleOnSubmit}>
          <input 
          type = 'text' 
          placeholder = "#fffff" 
          value={inputText}
          onChange = {(e)=>{setInputText(e.target.value)}}
          className = {`${(error) ? "error" : null}`}></input>
          <button type = 'submit' className ="btn">Beer Me!</button>
        </form>
      </section>
      <section className = "colors">
        {
          colorList.map((color,index)=>{
           return <SingleColor key = {index} rgb={color}/>
          })
        }
      </section>
    </>
}

export default App
