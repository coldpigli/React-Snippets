import React, { useState} from 'react'
import SingleColor from './SingleColor'


import Values from 'values.js'

function App() {

  const [inputText, setInputText] = useState("")
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState(new Values("#17255A").all(10).map((color)=> {return {rgb: color.rgb, weight: color.weight}}));

  
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    try{
      
      let colors = new Values(inputText).all(10);
      let rgbValues = colors.map((color)=> {return {rgb: color.rgb, weight: color.weight}});
      setColorList(rgbValues);
      setError(false);
    }
    catch{
      setError(true);
    }
  };

    return <>
      <section  className = "container">
        <h3>Color Generator by Coldpigli</h3>
        <form onSubmit = {handleOnSubmit}>
          <input 
          type = 'text' 
          placeholder = "Enter hex here" 
          value={inputText}
          onChange = {(e)=>{setInputText(e.target.value)}}
          className = {`${(error) ? "error" : null}`}></input>
          <button type = 'submit' className ="btn">Beer Me!</button>
        </form>
      </section>
      <section className = "colors">
        {
          colorList.map((color,index)=>{
           return <SingleColor key = {index} rgb={color.rgb} weight = {color.weight} index={index}/>
          })
        }
      </section>
    </>
}

export default App
