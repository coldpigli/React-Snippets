import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

const allCategories = ['all', ...new Set(items.map((item)=>item.category))] ; 
console.log(allCategories);
const [categories, setCategories] = useState(allCategories);
const [foods, setFoods] = useState(items);

const filterItem = (category) => {
  if(category === 'all'){
    setFoods(items);
    return;
  }
  const newCategories=items.filter((item)=>item.category===category)
  setFoods(newCategories);
}

  return <main >
    <section className = "menu section">
    <div className="title">
      <h2>Piyush's Menu</h2>
      <div className="underline"></div>

    </div>
    <Categories categories={categories} filterItem = {filterItem}/>
    <Menu foods = {foods}/>
    </section>
    
    
  </main>;
}

export default App;
