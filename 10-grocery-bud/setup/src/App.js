import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [text, setText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: '', type: ''});

const handleSubmit = (e) => {
  e.preventDefault();

  if(!text){
    //show alert that name cannot be empty
  }
  else if (text && isEditing){
    //allow to edit instead of adding to the list
  }
  else{
    const newListItem = {id: new Date().getTime().toString(),
                         title: text};
    setAlert(true);
    setListItems([...listItems,newListItem]);
  }
}

  return <section className = "section-center">
    <form className="grocery-form" onSubmit = {handleSubmit}>
      {
        alert.show&&<Alert/>
      }
      <h3>Grocery List</h3>
      <div className = "form-control">
        <input type="text"
        className = "grocery"
        placeholder = "e.g: Milk, Cheese"
        value = {text}
        onChange = {(e)=>{setText(e.target.value)}}
        />
        
        <button type ="submit" className = "submit-btn" >
          {isEditing? 'Edit':'Submit'}
        </button>
      </div>
    </form>
    <div className = "grocery-container">
      <List list = {listItems}/>
      <button className="clear-btn">Clear item</button>
    </div>
  </section>
}

export default App
