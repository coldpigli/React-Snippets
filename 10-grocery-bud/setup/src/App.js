import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if(list){
      return JSON.parse(list);
    }
    else{
      return [];
    }
  }

  const [text, setText] = useState('');
  const [listItems, setListItems] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, 
                                      msg: '', 
                                      type: ''});

useEffect(() => {
  
  localStorage.setItem('list', JSON.stringify(listItems))
}, [listItems])


const removeItem = (id) => {
  alertFunction(true,"Item Removed","danger");
  setListItems(listItems.filter((item)=>item.id!==id));
}

const editItem = (id) => {
  setIsEditing(true);
  const specificItem = listItems.find((item)=>item.id===id);
  setText(specificItem.title);
  setEditID(id);
}

const handleSubmit = (e) => {
  e.preventDefault();

  if(!text){
    //show alert that name cannot be empty
    alertFunction(true,"Item cannot be empty","danger");
  }
  else if (text && isEditing){
    setListItems(
      listItems.map((item)=>{
        if(item.id===editID){
          return {...item, title: text}
        }
        return item;
      })
    )
    setText('');
    setEditID(null);
    setIsEditing(false);
    alertFunction(true, "Edited Sucessfully", "success");
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
        alert.show&&<Alert alert = {alert} removeAlert = {alertFunction} listItems={listItems}/>
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
      <List listItems = {listItems} removeItem = {removeItem} editItem = {editItem} />
      <button className="clear-btn" onClick = {()=>{
        setListItems([]);
      }}>Clear item</button>
    </div>)
    }
  </section>
}

export default App
