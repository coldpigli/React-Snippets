import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {


const [categories, setCategories] = useState([])
const [foods, setFoods] = useState(items);

  return <main >
    <section className = "menu section">
    <div className="title">
      <h2>Piyush's Menu</h2>
      <div className="underline"></div>
    </div>
    <Categories/>
    <Menu foods = {foods}/>
    </section>
    
    
  </main>;
}

export default App;
