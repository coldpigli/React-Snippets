import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [text, setText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, 
                                      msg: '', 
                                      type: ''});


const removeItem = (id) => {
  setListItems(listItems.filter((item)=>item.id!==id));
  
  setAlert(true,"Item Removed","success");
}

const handleSubmit = (e) => {
  e.preventDefault();

  if(!text){
    //show alert that name cannot be empty
    alertFunction(true,"Item cannot be empty","danger");
  }
  else if (text && isEditing){
    //allow to edit instead of adding to the list
  }
  else{
    const newListItem = {id: new Date().getTime().toString(),
                         title: text};
    //alert_setting_to_be_done
    alertFunction(true,"Added item Successfully","success");
    setListItems([...listItems,newListItem]);
    setText('');
  }
}

const alertFunction = (show=false,msg="",type="") => {
  setAlert({show,msg,type});
};

  return <section className = "section-center">
    <form className="grocery-form" onSubmit = {handleSubmit} >
      {
        alert.show&&<Alert alert = {alert} removeAlert = {alertFunction}/>
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
    {listItems.length > 0 && (<div className = "grocery-container">
      <List listItems = {listItems} removeItem = {removeItem} />
      <button className="clear-btn" onClick = {()=>{
        setListItems([]);
      }}>Clear item</button>
    </div>)
    }
  </section>
}

export default App
