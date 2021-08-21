import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({list}) => {
  return <div className = "grocery-list">
  {list.map((item)=>{
    return <article key = {list.id} className = 'grocery-item'>
          <p className = 'title'>
            {item.title}
          </p>
          <div className="btn-container">
          <FaEdit className = "edit-btn"></FaEdit>
          <FaTrash className = "delete-btn"></FaTrash>
          </div>
          
      </article>
    
  })}
  </div>
  
}

export default List
